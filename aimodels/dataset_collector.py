import cv2
import mediapipe as mp
import csv
import os
import numpy as np
from mediapipe.python.solutions import hands as mp_hands
from mediapipe.python.solutions import drawing_utils as mp_draw

# 1. Konfigurasi MediaPipe
hands = mp_hands.Hands(
    static_image_mode=False, 
    max_num_hands=2, 
    min_detection_confidence=0.7,
    min_tracking_confidence=0.5
)

# 2. Persiapan File CSV
csv_file = "dataset_bisindo.csv"

# Buat header CSV jika file belum ada
if not os.path.exists(csv_file):
    with open(csv_file, mode='w', newline='') as f:
        writer = csv.writer(f)
        # Header: label, Left_x0, Left_y0... Right_x20, Right_y20, Right_z20
        header = ['label']
        for hand_type in ['Left', 'Right']:
            for i in range(21):
                header.extend([f'{hand_type}_x{i}', f'{hand_type}_y{i}', f'{hand_type}_z{i}'])
        writer.writerow(header)
        print(f"File {csv_file} berhasil dibuat beserta headernya.")

# 3. Akses Kamera
cap = cv2.VideoCapture(0)

# Minta input awal ke user
label_saat_ini = input("Masukkan huruf BISINDO yang ingin direkam (contoh: A): ").upper()
print(f"\n--- MODE REKAM: {label_saat_ini} ---")
print("Tekan 's' pada keyboard berulang kali untuk menyimpan frame.")
print("Tekan 'g' untuk mengganti huruf.")
print("Tekan 'q' untuk keluar.")

while cap.isOpened():
    success, img = cap.read()
    if not success:
        break

    img = cv2.flip(img, 1)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = hands.process(img_rgb)

    # Siapkan array kosong (isi 0) untuk tangan kiri dan kanan
    # Masing-masing butuh 63 data (21 titik * 3 koordinat)
    left_hand_data = np.zeros(63).tolist()
    right_hand_data = np.zeros(63).tolist()

    if results.multi_hand_landmarks:
        for hand_lms, hand_info in zip(results.multi_hand_landmarks, results.multi_handedness):
            label = hand_info.classification[0].label # 'Left' atau 'Right'
            
            # Ekstrak 63 koordinat dari tangan yang terdeteksi
            hand_data = []
            for lm in hand_lms.landmark:
                hand_data.extend([lm.x, lm.y, lm.z])
            
            # Masukkan ke array yang sesuai jenis tangannya
            if label == 'Left':
                left_hand_data = hand_data
            elif label == 'Right':
                right_hand_data = hand_data
            
            mp_draw.draw_landmarks(img, hand_lms, mp_hands.HAND_CONNECTIONS)

    # Gabungkan menjadi 1 baris utuh: [Label] + [Data Kiri] + [Data Kanan]
    row_data = [label_saat_ini] + left_hand_data + right_hand_data

    # UI Sederhana di Layar
    cv2.putText(img, f"Mode: {label_saat_ini}", (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
    cv2.putText(img, "'s': Simpan | 'g': Ganti Huruf | 'q': Keluar", (10, 80), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 0), 2)
    
    cv2.imshow("Dataset Collector - BISINDO", img)
    
    # Deteksi Keyboard
    key = cv2.waitKey(1) & 0xFF
    if key == ord('s'):
        # Cek apakah ada tangan di layar sebelum menyimpan
        if results.multi_hand_landmarks:
            with open(csv_file, mode='a', newline='') as f:
                writer = csv.writer(f)
                writer.writerow(row_data)
            print(f"Data tersimpan untuk huruf: {label_saat_ini}")
        else:
            print("Gagal menyimpan: Tidak ada tangan yang terdeteksi.")
            
    elif key == ord('g'):
        # Pause kamera sebentar untuk minta input di terminal
        label_saat_ini = input("\nMasukkan huruf BISINDO baru: ").upper()
        print(f"--- MODE REKAM: {label_saat_ini} ---")
        
    elif key == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
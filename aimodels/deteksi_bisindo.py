import cv2
import mediapipe as mp
import numpy as np
import pickle
# Panggil manual seperti biasa
from mediapipe.python.solutions import hands as mp_hands
from mediapipe.python.solutions import drawing_utils as mp_draw

# 1. Load "Otak" AI yang sudah dilatih tadi
with open('model_bisindo.pkl', 'rb') as f:
    model = pickle.load(f)

# 2. Setup MediaPipe
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.7)

# 3. Buka Kamera
cap = cv2.VideoCapture(0)
print("Kamera menyala! Tunjukkan gerakan BISINDO-mu.")

while cap.isOpened():
    success, img = cap.read()
    if not success: break

    img = cv2.flip(img, 1)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = hands.process(img_rgb)

    # Array kosong untuk menampung data (harus sama persis formatnya dengan dataset)
    left_hand_data = np.zeros(63).tolist()
    right_hand_data = np.zeros(63).tolist()

    if results.multi_hand_landmarks:
        for hand_lms, hand_info in zip(results.multi_hand_landmarks, results.multi_handedness):
            label = hand_info.classification[0].label
            
            # Ekstrak 63 koordinat
            hand_data = []
            for lm in hand_lms.landmark:
                hand_data.extend([lm.x, lm.y, lm.z])
            
            # Masukkan sesuai jenis tangan
            if label == 'Left':
                left_hand_data = hand_data
            elif label == 'Right':
                right_hand_data = hand_data
                
            mp_draw.draw_landmarks(img, hand_lms, mp_hands.HAND_CONNECTIONS)

        # Gabungkan data kiri dan kanan menjadi 1 baris utuh (126 koordinat)
        row_data = left_hand_data + right_hand_data

        try:
            # 4. AI Menebak Huruf!
            prediksi = model.predict([row_data])[0]
            
            # Tampilkan hasil tebakan di layar
            cv2.putText(img, f'Huruf: {prediksi}', (20, 70), 
                        cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 255, 255), 4)
        except Exception as e:
            pass # Abaikan jika ada error kecil saat transisi tangan

    cv2.imshow("Sistem Deteksi BISINDO - Filkom", img)
    if cv2.waitKey(1) & 0xFF == ord('q'): break

cap.release()
cv2.destroyAllWindows()
from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import joblib
import tensorflow as tf

app = Flask(__name__)

# Load model dan scaler
model = tf.keras.models.load_model('stunting_model.h5')
scaler = joblib.load('scaler-fix.pkl')

# Fitur yang digunakan
selected_features = ['Gender', 'Age', 'Birth Weight', 'Body Length', 'Breastfeeding']

@app.route('/')
def home():
    return jsonify({"message": "API Deteksi Dini Stunting siap digunakan!"})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Ambil data input
        gender = 1.0 if data['Gender'] == 'Laki-laki' else 0.0
        age = float(data['Age'])
        birth_weight = float(data['Birth Weight'])
        body_length = float(data['Body Length'])
        breastfeeding = 1.0 if data['Breastfeeding'] == 'Ya' else 0.0

        # Bentuk dataframe
        input_df = pd.DataFrame([{
            'Gender': gender,
            'Age': age,
            'Birth Weight': birth_weight,
            'Body Length': body_length,
            'Breastfeeding': breastfeeding
        }])

        # Transformasi dengan scaler
        scaled_input = scaler.transform(input_df[selected_features])

        # Prediksi
        prediction = model.predict(scaled_input)
        prob = float(prediction[0][0])
        label = int(prob > 0.5)

        # Respon
        result = {
            "prediction": "Stunting" if label == 1 else "Tidak Stunting",
            "probability": round(prob, 4)
        }
        return jsonify(result)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

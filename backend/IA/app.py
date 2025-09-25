from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from werkzeug.utils import secure_filename
import pytesseract
from PIL import Image
import os

# Realizando o caminho da imagem
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'

# Configure o caminho do Tesseract OCR
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
os.environ['TESSDATA_PREFIX'] = r'C:\Program Files\Tesseract-OCR\tessdata'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            return redirect(request.url)
        if file:
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            # Realizar OCR na imagem em português
            text = pytesseract.image_to_string(Image.open(filepath), lang='por')

            return render_template('result.html', text=text)
    except Exception as e:
        print(f"Erro ao processar a imagem: {e}")
        return "Ocorreu um erro ao processar a imagem."

@app.route('/css/<path:filename>')
def send_css(filename):
    return send_from_directory('css', filename)

if __name__ == '__main__':
    app.run(debug=True)

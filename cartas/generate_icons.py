from PIL import Image
import os

# Rutas
base_jpg = './Snoopy.jpg'
output_dir = './public'

# Cargar imagen
img = Image.open(base_jpg)

# Definir tamaños para Android
sizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192,
}

# Crear carpetas y guardar imágenes redimensionadas
for folder, size in sizes.items():
    folder_path = os.path.join(output_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    
    # Redimensionar
    resized = img.resize((size, size), Image.Resampling.LANCZOS)
    output_path = os.path.join(folder_path, 'ic_launcher.png')
    resized.save(output_path)
    print(f"Creado: {output_path} ({size}x{size})")

print("Todos los íconos han sido creados exitosamente!")

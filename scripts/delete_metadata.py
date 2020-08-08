# importar modulo para leer archivos 
import os

# importar biblioteca Pillow
from PIL import Image

# carpeta donde estan las imagenes
direccion = "../content/images"

# encontrar carpetas
carpetas = os.listdir(direccion)

# iterar en cada carpeta
for carpeta in carpetas:
  
  # recuperar direccion de la carpeta
  direccionCarpeta = direccion + "/" + carpeta
 
  # confirmar que sea carpeta y no archivo
  if (os.path.isdir(direccionCarpeta)):
    
    # encontrar lista de imagenes
    imagenes = os.listdir(direccionCarpeta)
    
    # iterar sobre todas las imagenes en la carpeta
    for imagen in imagenes:

      if (imagen != ".DS_Store"):

        # recuperar direccion de la imagen
        direccionImagen = direccionCarpeta + "/" + imagen

        # abrir imagen original
        imagenOriginal = Image.open(direccionImagen)

        # recuperar la metadata
        metadata = list(imagenOriginal.getdata())

        # crear imagen sin metadata, aún en blanco
        imagenModificada = Image.new(imagenOriginal.mode, imagenOriginal.size)

        # quitar metadata
        imagenModificada.putdata(metadata)

        # grabar imagen al disco duro en el mismo formato original
        imagenModificada.save(direccionImagen)




# image = Image.open("1.jpg")


# # image_without_exif = Image.new(image.mode, image.size)
# # image_without_exif.putdata(data)

# # image_without_exif.save('image_file_without_exif.jpeg')

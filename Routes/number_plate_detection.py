import cv2
import numpy as np
import imutils
import pytesseract
import sys
import os

# Set path to Tesseract executable (if not added to PATH)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"  # Update path for Windows

# Get the uploaded image file path as a command-line argument
if len(sys.argv) < 2:
    print("Error: No image path provided.")
    sys.exit()

image_path = sys.argv[1]  # Path to the uploaded image

# Output folder for saving detected number plate image
output_folder = "detected_plates"
os.makedirs(output_folder, exist_ok=True)

# Read the image from the provided path
img = cv2.imread(image_path)
if img is None:
    print("Error: Image not found.")
    sys.exit()

# Convert the image to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Apply bilateral filter for noise reduction
bfilter = cv2.bilateralFilter(gray, 11, 17, 17)

# Apply Canny edge detection
edged = cv2.Canny(bfilter, 30, 200)

# Find contours in the edged image
keypoints = cv2.findContours(edged.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
contours = imutils.grab_contours(keypoints)
contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]  # Top 10 contours

# Loop through contours to find a quadrilateral shape (license plate)
location = None
for contour in contours:
    approx = cv2.approxPolyDP(contour, 10, True)
    if len(approx) == 4:
        location = approx
        break

# If a location (license plate) is found
if location is not None:
    mask = np.zeros(gray.shape, np.uint8)
    new_image = cv2.drawContours(mask, [location], 0, 255, -1)
    new_image = cv2.bitwise_and(img, img, mask=mask)

    # Extract the region of interest (ROI) from the grayscale image
    (x, y) = np.where(mask == 255)
    (x1, y1) = (np.min(x), np.min(y))  # Top-left corner
    (x2, y2) = (np.max(x), np.max(y))  # Bottom-right corner
    cropped_image = gray[x1:x2+1, y1:y2+1]

    # Save the detected number plate image
    detected_image_path = os.path.join(output_folder, "detected_plate.jpg")
    cv2.imwrite(detected_image_path, cropped_image)

    # Use Tesseract OCR to read text from the cropped image
    detected_text = pytesseract.image_to_string(cropped_image, config='--psm 8').strip()

    if detected_text:
        # Remove non-alphanumeric characters and format text
        clean_text = ''.join(filter(lambda x: x.isalnum() or x.isspace(), detected_text))
        formatted_text = ' '.join(clean_text.split())  # Normalize spacing

        # Print detected license plate number
        print( formatted_text)
       
    else:
        print("No text detected on the license plate.")
        print(f"Image of detected plate saved at: {detected_image_path}")
else:
    print("No license plate detected.")

# Client microservice

import os 
import requests

# Global Constants:
# PORT = os.getenv("PORT")
# KEY = os.environ.get("API_KEY")
# FOLDER = os.environ.get("GRADE_FOLDER")

# URL = f"http://localhost:{PORT}/files?api_key={KEY}"

def main():
    # Python demo file to get words!
    PORT = 3000
    # os.getenv("PORT")
    word_easy = f"http://localhost:{PORT}/easy"
    word_med = f"http://localhost:{PORT}/medium"
    word_hard = f"http://localhost:{PORT}/hard"
    
    response = requests.get(word_easy)
    print("Easy Response: ", response.text)

    response = requests.get(word_med)
    print("Medium Response: ", response.text)

    response = requests.get(word_hard)
    print("Hard Response: ", response.text)
main()
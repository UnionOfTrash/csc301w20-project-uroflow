import os
import subprocess
from flask import Flask, request

app = Flask("pytorch_model")


@app.route("/", methods=["GET"])
def serve():
    id = request.args["id"]

    preprocessor = os.environ["PREPROCESS_FILE"]
    model = os.environ["MODEL_FILE"]
    audio_file = "./blob/" + id + ".wav"
    out_path = "./blob/"
    out_filename = id + ".csv"
    subprocess.run(["python3", preprocessor, "-audio_file", audio_file, "-out_path", out_path, "-out_filename", out_filename, "-checkpoint", model])
    subprocess.run(["python3", "plot.py", "-i", id])

    return "Success"


if __name__ == "__main__":
    app.run()

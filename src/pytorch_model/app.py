import os
import subprocess
from flask import Flask, request

app = Flask("pytorch_model")


@app.route("/", methods=["GET"])
def serve():
    id = request.args["id"]

    model = os.environ["MODEL_FILE"]
    audio_file = "./audios/" + id + ".wav"
    out_path = "./curves/"
    out_filename = id + ".csv"
    subprocess.run(["python3", model, "-audio_file", audio_file, "-out_path", out_path, "-out_filename", out_filename, "-checkpoint", "./Water.pt"])
    subprocess.run(["python3", "plot.py", "-i", id])

    return "Success"


if __name__ == "__main__":
    app.run()

pipeline {
  agent {
    docker {
      image 'node:12'
      args '--network=src_default'
    }
  }
  stages {
    stage('Build') {
      steps {
        dir(path: 'src/api') {
          sh 'npm install'
        }
      }
    }
  }
}
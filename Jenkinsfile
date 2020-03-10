pipeline {
  agent {
    node {
      label '12'
    }

  }
  stages {
    stage('test') {
      steps {
        dir(path: 'src/api') {
          build(job: 'npm install', wait: true)
        }

      }
    }

  }
}
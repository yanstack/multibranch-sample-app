pipeline {
  agen {label "windows"}
  options {
    buildDiscarder (logRotator(numToKeepStr:'5'))
  }
  stages {
    stage('Build') {
      steps {
        bat '''
          npm install
          npm run coverage
        '''
      }
    }
  }
  post {
    always {
      junit (
        allowEmptyResults: true
        testResults:'.\coverage\lcov-report'
      )
    }
  }
}

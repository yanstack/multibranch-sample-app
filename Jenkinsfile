pipeline {
  agent any
  options {
    buildDiscarder (logRotator(numToKeepStr:'5'))
  }
  stages {
    stage('Build') {
      steps {
        bat '''
          npm install --save-dev jest-junit
          npm test
        '''
      }
    }
  }
  post {
    always {
      junit (
        allowEmptyResults: true,
        testResults:'reports/junit/js-test-results.xml'
      )
    }
  }
}

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
          npm run test
        '''
      }
    }
  }
  post {
    always {
      junit (
        allowEmptyResults: true
        testResults:'reports/junit/js-test-results.xml'
      )
    }
  }
}

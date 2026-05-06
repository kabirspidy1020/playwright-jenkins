pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --project=chromium'
            }
        }
    }

    post {
        always {
            echo "Build Completed"

            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }

        success {
            echo "Tests Passed ✅"
            mail to: 'yourmail@gmail.com',
                 subject: "Build Passed ✅",
                 body: "All tests passed"
        }

        failure {
            echo "Tests Failed ❌"
            mail to: 'yourmail@gmail.com',
                 subject: "Build Failed ❌",
                 body: "Check Jenkins logs"
        }
    }
}
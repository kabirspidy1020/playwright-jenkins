pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker compose build'
            }
        }

        // stage('Install Browsers') {
        //     steps {
        //         // Install only chromium (fast & stable)
        //         bat 'npx playwright install chromium'
        //     }
        // }

        stage('Run Tests') {
            steps {
                bat 'if exist playwright-report rmdir /s /q playwright-report'
                bat 'docker compose up'
            }
        }
    }

    post {
        always {
            echo "Build Completed"
            bat 'docker compose down'

            //  Correct HTML Publisher syntax
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ])
        }

        success {
            echo "Tests Passed "
            mail to: 'tiwariprakhar037@gmail.com',
                 subject: "Build Passed ",
                 body: "All tests passed"
        }

        failure {
            echo "Tests Failed "
            mail to: 'tiwariprakhar037@gmail.com',
                 subject: "Build Failed ",
                 body: "Check Jenkins logs"
        }
    }
}
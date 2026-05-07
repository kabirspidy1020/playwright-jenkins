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
                // Install only chromium (fast & stable)
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                // Clean old reports
                bat 'if exist playwright-report rmdir /s /q playwright-report'

                // Run tests (only chromium)
                bat 'npx playwright test --project=chromium'
            }
        }
    }

    post {
        always {
            echo "Build Completed"

            // ✅ Correct HTML Publisher syntax
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
            echo "Tests Passed ✅"
            mail to: 'tiwariprakhar037@gmail.com',
                 subject: "Build Passed ✅",
                 body: "All tests passed"
        }

        failure {
            echo "Tests Failed ❌"
            mail to: 'tiwariprakhar037@gmail.com',
                 subject: "Build Failed ❌",
                 body: "Check Jenkins logs"
        }
    }
}
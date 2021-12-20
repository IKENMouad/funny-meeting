pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'Building the application'
            }
        }

        stage('test') {
            steps {
                echo 'Testing the application updated'
            }
        }

        stage('deploy') {
            when {
                expression {
                    BRANCH_NAME == 'develop'
                }
            }
            steps {
                echo 'Deploying the application updated'
            }
        }
    }
}    
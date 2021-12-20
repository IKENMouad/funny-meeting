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
                echo 'Testing the application'
            }
        }

        stage('deploy') {
            when {
                expression {
                    BRANCH_NAME == 'develop'
                }
            }
            steps {
                echo 'Deploying the application'
            }
        }
    }
}    
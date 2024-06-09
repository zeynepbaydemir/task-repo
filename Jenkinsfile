pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'rest-api:latest'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    dockerImage.inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(
                        configs: 'kubernetes/*.yaml',
                        kubeconfigId: 'kubeconfig',
                        enableConfigSubstitution: true
                    )
                }
            }
        }
    }
}
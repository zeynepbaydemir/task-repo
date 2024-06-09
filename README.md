# task-repo

#### Docker
```
docker build -t rest-api:latest .
```

```
docker run -p 3000:3000 rest-api:latest
```

Docker çalışıyor. 
![[Pasted image 20240609181253.png]]

#### Kubernetes

```
minikube start
```

![[Pasted image 20240609201705.png]]

```
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

```
minikube service rest-api-service
```

#### Jenkins
Jenkins çalıştırma aşaması:
![[Pasted image 20240608201321.png]]
anahtar için:
![[Pasted image 20240608201402.png]]
jenkins:
![[Pasted image 20240608201439.png]]
password için:
![[Pasted image 20240608201512.png]]
açık ip adreslerini bulduk jenkins'i atamak için
![[Pasted image 20240608201626.png]]

Sonrasında tarayıcıya bu adresi girdik:  http://10.0.2.15:8080 

Administrator password veren koddaki password'u yapıştırdık bu sayfada şifre isteyen yere. 


Önerilen kurulumları yaptık çıkan sayfada karşımıza bu pencere açıldı.
![[Pasted image 20240608203124.png]]

 nginx kurulumu yapıldı.
![[Pasted image 20240608203357.png]]

nginx:
![[Pasted image 20240608203438.png]]

nginx sayfa açılışı:
![[Pasted image 20240608203644.png]]

Bu sayfaya gelip bilgileri doldurduk
![[Pasted image 20240608212201.png]]


Ardından:
![[Pasted image 20240608214822.png]]

Jenkins
![[Pasted image 20240608214947.png]]

Jenkins arayüz:
![[Pasted image 20240608215210.png]]


* Trivy için
1. Trivy için gerekli kurulumları yap. 
2. trivy image (image ismi)


* Prometheus ve Grafana Kurulumu

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

helm install prometheus prometheus-community/prometheus --namespace monitoring
helm install grafana grafana/grafana --namespace monitoring
```

* Grafana'yı Erişilebilir Hale Getirme:

```
kubectl --namespace monitoring port-forward svc/grafana 3000:80
```

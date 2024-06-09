# task-repo

#### Docker
```
docker build -t rest-api:latest .
```

```
docker run -p 3000:3000 rest-api:latest
```

Docker çalışıyor. 
![111](https://github.com/zeynepbaydemir/task-repo/assets/78684394/63426b9e-5335-449d-8467-20e78bc09d62)


#### Kubernetes

```
minikube start
```

![222](https://github.com/zeynepbaydemir/task-repo/assets/78684394/d266339f-b933-4787-933b-5a41e215617c)


```
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

```
minikube service rest-api-service
```

#### Jenkins
Jenkins çalıştırma aşaması:
![333](https://github.com/zeynepbaydemir/task-repo/assets/78684394/1edcdd1e-925c-4332-8282-57ffbdca711c)

anahtar için:
![444](https://github.com/zeynepbaydemir/task-repo/assets/78684394/1a60303b-30a1-4532-8e09-5edacb6c0a32)

jenkins:
![555](https://github.com/zeynepbaydemir/task-repo/assets/78684394/d2602841-acbc-4a5f-9d7f-d0559863b4c6)

password için:
![777](https://github.com/zeynepbaydemir/task-repo/assets/78684394/c3574dbd-f761-4575-a5a8-1cf4198e45b1)


açık ip adreslerini bulduk jenkins'i atamak için
![666](https://github.com/zeynepbaydemir/task-repo/assets/78684394/f6d066b3-39de-45cc-89a3-817cc0e36751)


Sonrasında tarayıcıya bu adresi girdik:  http://10.0.2.15:8080 

Administrator password veren koddaki password'u yapıştırdık bu sayfada şifre isteyen yere. 


Önerilen kurulumları yaptık çıkan sayfada karşımıza bu pencere açıldı.
![888](https://github.com/zeynepbaydemir/task-repo/assets/78684394/c1fc43a7-9d97-4928-b93c-4cc00aa29e90)


 nginx kurulumu yapıldı.
![999](https://github.com/zeynepbaydemir/task-repo/assets/78684394/288c1f25-1480-4d22-98b4-1b90211470b7)


nginx:
![101010](https://github.com/zeynepbaydemir/task-repo/assets/78684394/120f0ed6-9e5b-42a0-ad2e-3de59850c46c)


nginx sayfa açılışı:
![a1](https://github.com/zeynepbaydemir/task-repo/assets/78684394/f3bca3ed-38ae-4b4f-a81d-a4229e6122d0)


Bu sayfaya gelip bilgileri doldurduk
![a2](https://github.com/zeynepbaydemir/task-repo/assets/78684394/d37cfa7a-5184-46dc-9e7d-cf7fb6bb4b26)



Ardından:
![a3](https://github.com/zeynepbaydemir/task-repo/assets/78684394/7c317af0-a18e-4e93-bcfa-de5a7bfb7873)


Jenkins
![a4](https://github.com/zeynepbaydemir/task-repo/assets/78684394/61e50387-76d2-4eab-ba6f-5b8a894ec252)


Jenkins arayüz:
![a5](https://github.com/zeynepbaydemir/task-repo/assets/78684394/d0609792-d34d-4ebc-bfb0-8f283aeda1d0)



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

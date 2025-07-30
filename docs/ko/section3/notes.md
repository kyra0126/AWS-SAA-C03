# Section 3 - AWS 시작하기

## ☁️ 관련 AWS 서비스

| 서비스     | 목적                         | 주요 특징 |
|------------|------------------------------|-----------|
| Region        | AWS 데이터센터가 있는 '도시 단위 지역'       | Region에 따른 [서비스 차이](https://aws.amazon.com/ko/about-aws/global-infrastructure/regional-product-services/) |

---

## [AWS 글로벌 인프라 구조](https://aws.amazon.com/ko/about-aws/global-infrastructure/regions_az/)

AWS는 **전 세계 사용자에게 안정적이고 빠른 클라우드 서비스를 제공**하기 위해 **글로벌 인프라스트럭처(Global Infrastructure)**를 운영

---

## 🌟 AWS Global 인프라 구조 구성 요소
Data Center ⊂ AZ (도시 안의 서로 떨어진 데이터 그룹) ⊂ Region (도시)

| 용어               | 설명 |
|--------------------|------|
| **Region**         | AWS가 물리적으로 서버를 운영하는 지역 |
| **Availability Zone (AZ)** | 지역 내에 나눠진 독립된 데이터센터 묶음 (3-6, 3개가 일반적) |
| **Data Center**    | 실제 서버가 있는 물리적 건물 (AZ 안에 여러 개 존재 가능) |
| **Edge Location**  | 콘텐츠(파일, 이미지, 영상 등)를 빠르게 주기 위한 장소 |
| **Point of Presence (PoP)** | Edge Location을 포함하는 더 넓은 네트워크 거점 |

<details>
<summary> 🌟 Edge Location 이란?</summary>

<br>

### 상황

> 피자 가게 본점: 미국

> 프랜차이즈 매장 = **Edge Location**: 한국

- Edge Location이 없을 경우
    사용자가 한국에서 피자 주문 → 미국 본사에서 피자 만들어서 비행기로 배송: 오래 걸림

- Edge Location이 있는 경우
    사용자가 한국에서 피자 주문 → 서울 매장(Edge Location)에 **미리 만들어둔 피자(캐시된 콘텐츠)** 에서 바로 배송: 빠르게 도착

### 적용

| 예시            | AWS 개념                     |
|---------------------|------------------------------|
| 미국 본사        | 미국 Region (원래 콘텐츠 서버)   |
| 서울 프랜차이즈 매장 | Edge Location (캐시 서버)     |
| 피자                | 콘텐츠 (이미지, 영상, CSS 등) |
| 배달                | 사용자에게 전송(CDN)               |

**CloudFront**는 대표적인 AWS CDN(콘텐츠 전송 네트워크) 서비스

</details>

---

## AWS Region

- 하나의 Region은 여러 Availability Zones(AZs)로 구성됨
- 각 Region은 고유 코드로 구분됨 (예: `us-east-1`, `ap-northeast-2`)
- 대부분의 AWS 서비스는 Region 단위로 설정됨 (Region-Scoped)
  → **Region A에서 만든 서비스는 Region B에서 자동 사용되지 않음**

### 🌟 Region을 선택할 때 고려해야 할 요소 4가지

| 요소 | 설명 | 예시 |
|------|------|------|
| **규제(Compliance)** | 데이터 위치 관련 법률을 준수해야 하는 경우 | 프랑스 데이터는 프랑스에 보관해야함 |
| **근접성(Proximity)** | 사용자와 가까운 곳에서 서비스를 배포해야 응답 속도 향상 (지연↓) | 미국 유저가 많다면 `us-east-1` 선택 |
| **서비스 가용성(Available Services)** | 모든 Region이 모든 AWS 서비스를 제공하지 않음 | 사용하려는 서비스가 해당 Region에 있는지 확인 필요 |
| **비용(Pricing)** | Region별 서비스 요금이 다를 수 있음 | 서울보다 오하이오가 저렴한 경우도 있음 |

---

## Availability Zones (AZ)

- Region 내에 존재하는 **격리된 인프라 유닛** (3~6개, 주로 3개)
- 각 AZ는 **하나 이상의 독립된 데이터 센터**로 구성 (이중화된 전력, 네트워킹, 연결성을 통해 서로 소통)
- 각 AZ는 서로 완전히 분리되어 있음 (한 AZ의 장애가 다른 AZ로 확산되지 않도록 설계됨). 하지만 고대역폭, 초저지연 네트워크로 연결되어 소통 가능

### 예시
![AZ 예시](img/aws_region_ex.jpeg)
- Region: `ap-southeast-2` (시드니)
- AZs: `ap-southeast-2a`, `2b`, `2c`
- `2a` 안에는 데이터 센터가 2~3개 있을 수도 있음 (정확한 수는 공개되지 않음)

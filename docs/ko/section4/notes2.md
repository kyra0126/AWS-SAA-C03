# Section 4 - 액세스 키와 AWS CLI · SDK 활용

## AWS에 접근하는 3가지 방법 비교

| 접근 방법 | 특징 | 보호 방식 | 사용 환경 |
|-----------|------|-----------|-----------|
| **AWS Management Console** | 웹 기반 시각적 UI | 비밀번호 + MFA | 브라우저 |
| **AWS CLI (Command Line Interface)** | 명령어를 통해 AWS 서비스 직접 제어 | 액세스 키 | 터미널 |
| **AWS SDK (Software Development Kit)** | 코드 내에서 AWS API 호출 | 액세스 키 | 애플리케이션 내 포함 |

<br><br><br>

---

## 1️⃣ AWS Management Console

- 일반적으로 사용하는 **웹 인터페이스**
- **비밀번호 + MFA**로 보호됨
- 시각적이며 학습용 및 운영 초기에 적합
- 로그인만 하면 모든 리소스를 손쉽게 관리 가능


<br><br><br>

---

## 2️⃣ AWS CLI (Command Line Interface)
명령어 기반으로 AWS 서비스를 조작할 수 있는 도구

### 주요 특징
- 터미널에 명령어를 입력해서 AWS 서비스를 직접 사용
- AWS에서 제공하는 **기능(API)**에 바로 연결
- 자주 하는 작업은 명령어를 **모아두면 자동으로 처리** 가능
- 웹사이트(콘솔)에 들어가지 않아도, 명령어만으로 **리소스를 만들거나 삭제**
- **오픈 소스**: [AWS CLI GitHub](https://github.com/aws/aws-cli)

<details>
<summary> API에 연결된다는 건? </summary>

```bash
aws s3 ls
```
→ 위 명령어는 S3 버킷 목록을 가져오라는 AWS의 API와 연결됨

→ 콘솔에서 클릭하지 않고도 결과를 바로 확인 가능

</details>

<details>
<summary> 명령어를 모아 자동화? </summary>

```bash
#!/bin/bash
aws s3 cp backup.zip s3://my-bucket/
aws ec2 start-instances --instance-ids i-1234567890abcdef0
```
→ 위에처럼 명령어 여러 개를 파일로 저장해두면 매번 타이핑하지 않아도 스크립트 한 번 실행으로 여러 작업을 자동으로 처리가능
> 예를 들어, 백업 파일을 업로드하고 서버를 동시에 켜는 작업을 자동으로 수행

</details>

```bash
# 파일을 S3 버킷에 업로드
aws s3 cp myfile.txt s3://mybucket/

# S3 버킷 내 파일 목록 보기
aws s3 ls s3://mybucket/
```


<br><br><br>

---

## 3️⃣ AWS SDK (Software Development Kit)

프로그래밍 언어로 작성한 코드 안에서 AWS 서비스를 사용할 수 있게 해주는 도구

- Python같은 언어로 코드를 짤 때, AWS 서비스를 이용하고 싶은 경우 (예: S3에 파일 저장, EC2 서버 켜기 등)  
→ SDK를 사용하면 **명령어 없이도 코드 안에서 바로 AWS와 연결** 가능

### AWS SDK 사용 예시 (Python으로 S3에 있는 파일 목록 가져오기)

```python
import boto3

s3 = boto3.client('s3')
response = s3.list_buckets()

for bucket in response['Buckets']:
    print(bucket['Name'])
```
→ 명령어가 아닌 코드 안에서 직접 AWS 기능을 쓸 수 있음

---

### 주요 특징
- AWS SDK는 프로그래밍 언어마다 따로 준비되어 있음
- 명령어를 쓰지 않고, 코드 안에서 AWS 기능을 **직접 호출** (예: 코드를 실행하면 파일을 S3에 저장하거나 서버를 자동으로 켤 수 있음)
- 애플리케이션 내부에 SDK가 내장되어 있음
    > = 우리가 만든 앱이나 프로그램 속에 AWS에 연결하는 코드가 포함되어 있음
- 웹 서버, 모바일 앱, IoT 기기처럼 **여러 종류의 환경에서도 사용 가능**

---

### SDK 지원 언어

| 구분 | 지원 언어/플랫폼 |
|------|------------------|
| **일반 언어용 SDK** | JavaScript, Python (boto3), Java, Go, PHP, .NET, C++, Ruby, Node.js |
| **모바일 SDK** | Android, iOS |
| **IoT SDK** | Embedded C, Arduino 등 |

> 📌 참고: `AWS CLI`도 사실은 **Python SDK인 Boto3를 기반으로 만들어짐

---
<br><br><br>

## 액세스 키 (Access Key) 
AWS CLI 및 SDK는 콘솔 로그인 대신 **Access Key**를 사용해 인증

### ⚠️ 주의사항
1. 콘솔에서 직접 생성
2. 각 사용자별로 개별 관리 (절대 공유X)
3. 생성 후에는 반드시 즉시 다운로드 (재조회 불가)

---

### 구성 요소

| 요소                | 설명                        |
|---------------------|-----------------------------|
| **Access Key ID**   | 사용자 이름처럼 작동         |
| **Secret Access Key** | 비밀번호처럼 작동       |

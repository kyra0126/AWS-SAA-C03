# Section 4 - IAM 및 AWS CLI

## ☁️ 관련 AWS 서비스

| 서비스 | 목적 | 주요 특징 |
|--------|------|-----------|
| IAM    | 사용자/권한 관리 서비스 | 글로벌 서비스 (모든 리전에서 동일하게 동작) |

---

## IAM이란?

AWS에서 사용자, 그룹, 권한(정책)을 관리하는 서비스  
→ Identity and Access Management의 약자  

- **글로벌 서비스**  
- 사용자를 생성하고 그룹으로 관리
- 정책(Policy)을 통해 권한 제어

---

### ⚠ 루트 사용자 (Root User)

- 계정 생성 시 자동 생성되는 **최상위 권한 사용자**
- **오직 계정 생성 시에만 사용**해야 하며 이후에는 **절대 사용 금지**
- 대신 IAM 사용자 생성 후 **역할 위임** 필요

---

### 👤 사용자와 그룹

- 사용자는 조직 내 개인을 의미
- 그룹은 사용자들의 **논리적 묶음**

#### ✅ 예시

- 조직원: `Alice`, `Bob`, `Charles`, `David`, `Edward`, `Fred`

| 그룹명      | 구성원                   |
|-------------|--------------------------|
| Developers  | Alice, Bob, Charles      |
| Operations  | David, Edward            |
| Audit       | Charles, David           |
| (None)      | Fred (그룹 미소속 사용자) |

> 그룹에는 오직 **사용자만** 포함 가능 (다른 그룹 포함 불가)  
> 한 사용자는 **여러 그룹에 소속 가능**

---

### 📝 정책 (Policy)

- JSON 형식으로 정의된 권한 문서  
- 사람도 읽을 수 있게 **간단한 영어 문장**으로 구성

#### ✅ 정책 예시 (예: EC2, ELB, CloudWatch 허용)

```json
{
  "Effect": "Allow",
  "Action": [
    "ec2:Describe*",
    "elasticloadbalancing:Describe*",
    "cloudwatch:*"
  ],
  "Resource": "*"
}

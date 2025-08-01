# Section 4 - IAM and AWS CLI

## ☁️ Related AWS Service

| Service | Purpose | Key Features |
|---------|---------|---------------|
| 🌐 IAM  | User and permission management | Global service (works the same across all regions) |

---

**IAM = Identity and Access Management**

A service used to manage users, groups, and permissions (policies) within AWS.

---

## Root User

- The **root user** is the **default superuser account** created when you sign up for AWS (never share it).
- Should only be used **once during initial setup**, such as creating IAM users.
- For all regular operations, use IAM users instead and delegate necessary permissions.

<details>
<summary> Root User vs IAM User </summary>

<br>

> Root User = Pizza shop owner (the boss)  
> IAM User = Employee (part-time worker)

- The shop owner opens the store (AWS account) and does the initial setup  
  → Hiring employees (creating IAM users), opening bank account, setting menu  
- The store should be run by the employees, not the boss every day  
- Employees need a **job description (policy)** telling them what they can do  
  → e.g., “Can take orders”, “Can enter kitchen”, “Can use cash register”

### When should the root user be used?

| Situation | Use? |
|-----------|------|
| Creating IAM users and initial setup | ✅ Yes |
| Resetting passwords, updating billing info | ✅ Yes |
| Daily resource management | ❌ Use IAM users |

</details>

---

## Users and Groups

> A **user** represents an individual in your organization.  
> A **group** is a collection of users. (🌟 Groups cannot contain groups; only users)

### Example

![iam group ex](img/iam_group.jpeg)

| Group Name   | Members                    |
|--------------|-----------------------------|
| Developers   | Alice, Bob, Charles         |
| Operations   | David, Edward               |
| Audit        | Charles, David              |
| (None)       | Fred (no group assigned)    |

Users **do not have to belong to a group**, and a **user can belong to multiple groups**.

---

## Permissions

### Why assign permissions to users and groups?

- Even after creating IAM users or groups, they have **no access to AWS services by default**.
- You must attach a **policy** (a JSON document) that defines **what actions** the user or group is allowed to perform.

### 🌟 Least Privilege Principle

Always grant the **minimum permissions necessary** to perform a task.

> ✅ Just enough access = secure and manageable  
> ❌ Too much access = cost risks and security vulnerabilities

---

## Policy Structure (JSON Format)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ec2:Describe*",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "elasticloadbalancing:Describe*",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudwatch:ListMetrics",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:Describe*"
      ],
      "Resource": "*"
    }
  ]
}
```

| Field      | Description |
|------------|-------------|
| `Version`  | Policy version (always use `"2012-10-17"`) |
| `Statement`| The block that defines what permissions are granted (can be an array) |
| `Effect`   | `"Allow"` (grant access) or `"Deny"` (explicitly block access) |
| `Action`   | What actions are allowed (e.g., `ec2:Describe*` = view EC2 info) |
| `Resource` | What resources the actions apply to (e.g., `"*"` = all resources) |

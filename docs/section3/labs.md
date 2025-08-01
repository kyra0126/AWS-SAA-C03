# Exploring the AWS Console and Services

## 1. Selecting a Region

- You can check the currently selected region at the top right corner of the console.  
- Choosing a region geographically close to you helps reduce latency.  
- You can select any region regardless of your actual physical location.  
![Service](docs/section3/img/lab3_1.png)

## 2. AWS Console Overview

- Displays recently visited services  
- Shows account billing and usage information  
- Includes solution tutorials, service health, and more

![Service](docs/section3/img/lab3_2.png)

## 3. How to Find AWS Services

### Method 1: Click [Services] on the top left

- Browse services in alphabetical order or by category

![Service](docs/section3/img/lab3_3.png)

### Method 2: Use the search bar at the top

- Quickly access services by typing their names

![Service](docs/section3/img/lab3_4.png)

## 4. Region-Based vs. Global Services

<img src="docs/section3/img/lab3_5.png" width="400"/><img src="docs/section3/img/lab3_6.png" width="400"/>

| Service Type        | Example    | Region Selection | Description                                      |
|---------------------|------------|------------------|--------------------------------------------------|
| Global Service       | Route 53   | ❌ Not required   | Interface is the same regardless of region       |
| Region-Based Service | EC2        | ✅ Required       | Resources differ depending on the selected region | 

→ Make sure to **stay in the same region** throughout the labs.

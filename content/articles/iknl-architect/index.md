---
title: "A voice for 400 medical specialists"
description: "Melvin Kusters as Software Architect for IKNL | Slimroosteren"
date: "2022-05-28"
banner:
  src: "../../images/oplettende-artsen-tijdens-MDO.jpg"
  alt: "Oplettende artsen tijdens MDO"
  caption: 'Photo by <u><a href="https://iknl.nl/getmedia/bd598f2e-3693-44d8-8da7-6cc850179b3c/oplettende-artsen-tijdens-MDO.jpg?width=1000&height=667&ext=.jpg">IKNL</a></u>'
categories:
  - "Working Experience Highlight"
keywords:
  - "Software"
  - "Architect"
  - "IKNL"
  - "Slimroosteren"
---

In the ever-evolving landscape of healthcare technology, I had the privilege of serving as a **Software Architect at Integraal Kankercentrum Nederland (IKNL)** in Utrecht from February 2020 to April 2022. During this transformative journey, I played a pivotal role in **architecting and developing *Slimroosteren***, a groundbreaking SaaS solution that **redefined scheduling and call routing for IKNL's palliative consultation line**. In this portfolio blog post, I invite you to explore the challenges, achievements, and innovations that characterized my role in this remarkable project.

## Role Summary

As the architect and developer, I was entrusted with the responsibility of crafting *Slimroosteren*, a sophisticated platform aimed at ensuring the seamless availability of palliative care professionals via telephone.

### Tech Stack
My toolkit for this endeavor included (at the time) cutting-edge technologies such as **.NET Core 3.1, Angular 12 (Ivy), Azure, and the SIPSorcery library**. 

## Project Description

Our journey commenced with an ambitious vision: **empower over 400 palliative care consultants, comprising nurses, general practitioners, and home care workers, to take control of their schedules.** The goal was simple yet profound—allow these experts to schedule their own availability, thereby ensuring uninterrupted access to palliative care services by telephone. This vision came to life in the form of *Slimroosteren*, which was deployed in approximately 25 regions, ultimately culminating in a unified, national availability definition generated on a monthly basis.

## Role Description

As the architect for *Slimroosteren*, I wore multiple hats throughout the project's lifecycle. My journey began by bridging the gap between user requirements and the technical implementation. I collaborated closely with our Agile/Scrum team and occasionally conducted interviews with domain experts to ensure our solution was finely tuned to the needs of palliative care providers.

Having shaped the initial project definition, I took on the challenging task of designing the system architecture from scratch. Employing a monthly sprint cycle, I developed *Slimroosteren*, meticulously refining it as we progressed. IKNL conducted a comprehensive review and inspection, granting approval for deployment to a redundant cloud infrastructure.

Following deployment, I embraced the operational responsibilities of the project. This entailed supporting users across 25 regions and accommodating feature requests for the system's entire lifespan. Guided by a streamlined pipeline, we automated the building, testing, and deployment processes, ensuring efficiency and reliability.

## System Architecture

At the time, *Slimroosteren* was a distributed system comprising multiple interoperating microservices, each playing a critical role in achieving our scheduling and call routing goals.

1. A single-page application *served with Angular* enabled planners to **create an availability definition for a team of consultants**. They would craft a provisional week template with customizable time slots. Based on this template, a monthly schedule was generated, which consultants - *medical specialists, often general practicioners and nurses* - would then adjust according to their availability. *Slimroosteren* processed availability records in real-time, offering an on-demand preview of the autonomously generated definition. Planners had the flexibility to mark schedules as definitive and fine-tune them for production usage during the review phase.

1. A customized implementation of *the SIPSorcery library* **managed incoming telephone calls from the public domain**. It employed intelligent IVRs to route calls to on-duty consultants, functioning as a highly flexible call server. By assessing caller and dialed phone numbers and collecting user input, the system ensured that calls reached the appropriate consultant - matching the currently active scheduling definition.

1. Finally, **an off-site component served as a monitoring service**, keeping a vigilant eye on system-wide usage and providing invaluable insights for ongoing optimization while alerting on-call engineers in case of emergency.

## Reflection

In retrospect, my role as a Software Architect at IKNL was not just a professional experience but a transformative journey in Dutch healthcare technology. *Slimroosteren* has left an indelible mark, revolutionizing scheduling and call routing for palliative care consultants across the nation. It stands as a testament to innovation, collaboration, and the relentless pursuit of excellence in the world of software for healthcare.

Besides collaboratively leaving our mark on palliative care, I am tremendously grateful for having had this experience and everything I learned along the way. 
* I was taken aback by the lack of clarity and understanding in the organization's expectations for the final product. Since ours was a centralization effort, getting each individual regional team's requirements in scope was an essential challenge to be overcome - one that thought me the importance of truly listening and organizing input into a coherent directive. 
* Complex distributed systems with lots of impending changes are bound to be error-prone. An initially frequently changing scope made it my reality as architect to rewrite large parts of the codebase and support critical live production components throughout impactful changes to the core. This process made me appreciate the importance of sound architectural design and a solid CI/CD pipeline coupled with rigid and redundant infrastructure management to minimize development overhead and maximize recovery times in case of system failure.
  
Moving forward, I have and will continue to incorporate *an improved understanding of human dynamics in professional contexts* and *a necessary appreciation for sound architecture and infrastructure* in future opportunities.

Thank you for joining me on this journey. I look forward to the exciting challenges and innovations that the future holds in this ever-evolving field.
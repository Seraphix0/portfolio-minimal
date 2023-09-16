---
title: "A voice for 450+ medical specialists"
description: "Melvin Kusters as Software Architect for IKNL | Slimroosteren"
date: "2022-05-28"
banner:
  src: "../../images/oplettende-artsen-tijdens-MDO.jpg"
  alt: "First Markdown Post"
  caption: 'Photo by <u><a href="https://iknl.nl/getmedia/bd598f2e-3693-44d8-8da7-6cc850179b3c/oplettende-artsen-tijdens-MDO.jpg?width=1000&height=667&ext=.jpg">IKNL</a></u>'
categories:
  - "Working Experience Highlight"
keywords:
  - "Software"
  - "Architect"
  - "IKNL"
  - "Slimroosteren"
---

In the ever-evolving landscape of healthcare technology, I had the privilege of serving as a Software Architect at Integraal Kankercentrum Nederland (IKNL) in Utrecht from February 2020 to April 2022. During this transformative journey, I played a pivotal role in architecting and developing Slimroosteren, a groundbreaking SaaS solution that redefined scheduling and call routing for IKNL's palliative consultation line. In this portfolio blog post, I invite you to explore the challenges, achievements, and innovations that characterized my role in this remarkable project.

## Tech Stack and Role Summary

My toolkit for this endeavor included cutting-edge technologies such as .NET Core 3.1, Angular 12 (Ivy), Azure, and SIPSorcery. As the lead architect and developer, I was entrusted with the responsibility of crafting Slimroosteren, a sophisticated platform aimed at ensuring the seamless availability of palliative care professionals via telephone.

## Project Description

Our journey commenced with an ambitious vision: empower over 400 palliative care consultants, comprising nurses, general practitioners, and home care workers, to take control of their schedules. The goal was simple yet profound—allow these experts to schedule their own availability, thereby ensuring uninterrupted access to palliative care services by telephone. This vision came to life in the form of Slimroosteren, which was deployed in approximately 25 regions, ultimately culminating in a unified, national availability definition generated on a monthly basis.

## Role Description

As the architect for Slimroosteren, I wore multiple hats throughout the project's lifecycle. My journey began by bridging the gap between user requirements and the technical implementation. I collaborated closely with our Agile/Scrum team and occasionally conducted interviews with domain experts to ensure our solution was finely tuned to the needs of palliative care providers.

Having shaped the initial project definition, I took on the challenging task of designing the system architecture from scratch. Employing a monthly sprint cycle, I developed Slimroosteren, meticulously refining it as we progressed. IKNL conducted a comprehensive review and inspection, granting approval for deployment to a redundant cloud infrastructure.

Following deployment, I embraced the operational responsibilities of the project. This entailed supporting users across 25 regions and accommodating feature requests for the system's entire lifespan. Guided by a streamlined pipeline, we automated the building, testing, and deployment processes, ensuring efficiency and reliability.

## Primary System Process Description

Slimroosteren is a distributed system comprising two interoperating microservices, each playing a critical role in achieving our scheduling and call routing goals.

1. The first component focuses on creating an availability definition for a team of consultants. Planners craft a provisional week template with customizable time slots. Based on this template, a monthly schedule is generated, which consultants can then adjust according to their availability. Slimroosteren processes availability records in real-time, offering an on-demand preview of the autonomously generated definition. Planners have the flexibility to mark schedules as definitive and fine-tune them for production usage during the review phase.

1. The second component is responsible for managing incoming telephone calls from the public domain. It employs intelligent IVRs to route calls to on-duty consultants, functioning as a domain-specific call server. By assessing caller and dialed phone numbers and collecting user input, the system ensures that calls reach the appropriate consultant, all while querying the active definition.

1. A third off-site component serves as a monitoring service, keeping a vigilant eye on system-wide usage and providing invaluable insights for ongoing optimization.

## Conclusion

In retrospect, my role as a Software Architect at IKNL was not just a professional experience but a transformative journey in healthcare technology. Slimroosteren has left an indelible mark, revolutionizing scheduling and call routing for palliative care consultants across the nation. It stands as a testament to innovation, collaboration, and the relentless pursuit of excellence in the world of software architecture.

Thank you for joining me on this journey, and I look forward to the exciting challenges and innovations that the future holds in this ever-evolving field.
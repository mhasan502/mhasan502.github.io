import { getExperienceYears } from "../utils/getExperienceYears";

const experience = getExperienceYears();
const experienceYearsLabel = `${experience.roundedYears}+`;

export const summarizedAIData = [
  {
    id: "summary-v1",
    text: `Mehedi is an AI Engineer with ${experienceYearsLabel} years of experience building production AI and data systems. At Projsite, he develops Charlie, a context-aware support agent, contributes to the next-generation platform, and builds AI-driven document and workflow automation. Previously at AlterSense, he built large-scale streaming ML pipelines, optimized GPU inference, and delivered robust detection systems for noisy environments.`,
  },
  {
    id: "summary-v2",
    text: "Mehedi specializes in AI engineering, backend systems, and applied machine learning. At Projsite, he designs agent pipelines, builds context-aware product features, and automates document and booking-data workflows with AI, OCR, and Airflow. At AlterSense, he architected distributed real-time inference with Kafka, improved throughput with TensorRT, and developed high-performance streaming infrastructure in C++.",
  },
  {
    id: "summary-v3",
    text: "Mehedi is a results-driven AI/ML engineer who turns research and models into reliable products. At Projsite, he builds scalable AI agents, internal-data integrations, and automation systems such as Magic Reader. At AlterSense, he designed high-speed camera-stream inference pipelines, reduced GPU memory usage by 30%, and increased throughput by 1.7x while improving object detection in challenging environments.",
  },
  {
    id: "summary-v4",
    text: `Mehedi has ${experienceYearsLabel} years of experience across AI engineering, data pipelines, and software systems. At Projsite, he delivers production AI agents, contributes across backend and frontend architecture, and automates external data ingestion workflows. At AlterSense, he scaled Kafka-based inference processing at roughly 1.1 GB/s, optimized deployment efficiency, and built data infrastructure for analytics and batch inference.`,
  },
  {
    id: "summary-v5",
    text: "Mehedi is an AI Engineer focused on production AI, stream processing, and scalable data platforms. At Projsite, he develops agentic support systems, AI-powered document understanding, and workflow orchestration for operational data pipelines. At AlterSense, he built real-time camera-stream inference architecture, improved robustness in noisy conditions, and created the supporting ETL and collection systems needed for reliable ML operations.",
  },
  {
    id: "summary-v6",
    text: "Mehedi combines ML expertise with strong engineering execution across product, data, and infrastructure. At Projsite, he builds context-aware AI agents, retrieval and tool-use pipelines, and automation for supplier and booking workflows. At AlterSense, he developed distributed streaming inference systems, improved throughput through GPU optimization, and built end-to-end data infrastructure supporting real-time analytics and scheduled batch inference.",
  },
  {
    id: "summary-v7",
    text: "Mehedi is an AI/ML engineer with a record of building scalable production systems. At Projsite, he develops Charlie, integrates AI into core product workflows, and helps shape the next-generation platform across backend, frontend, and AI systems. At AlterSense, he built Kafka-powered real-time inference architecture, optimized GPU performance with TensorRT, and developed efficient streaming and data-collection platforms.",
  },
];

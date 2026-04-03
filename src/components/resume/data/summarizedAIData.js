import { getExperienceYears } from "../utils/getExperienceYears";

const experience = getExperienceYears();
const experienceYearsLabel = `${experience.roundedYears}+`;

export const summarizedAIData = [
  {
    id: "summary-v1",
    text: `Mehedi is an AI/ML engineer with ${experienceYearsLabel} years of experience in production machine learning. At Projsite, he builds AI agents and MLOps pipelines. At AlterSense, he developed Kafka-based real-time inference systems and improved GPU efficiency with TensorRT. He holds a Magna Cum Laude BSc in CSE and published research in 2023.`,
  },
  {
    id: "summary-v2",
    text: "Mehedi specializes in AI engineering, data systems, and applied ML. He currently develops agentic AI features and automated retraining pipelines at Projsite. Previously at AlterSense, he built distributed inference architecture with Kafka and improved model efficiency through GPU optimization. He graduated Magna Cum Laude in CSE and published flood-risk research in 2023.",
  },
  {
    id: "summary-v3",
    text: "Mehedi is a results-driven AI/ML engineer who turns models into production systems. At Projsite, he builds scalable AI agents and MLOps services. At AlterSense, he designed high-speed streaming inference pipelines and improved throughput and GPU memory use. He earned a 3.77/4.00 CSE degree with Magna Cum Laude honors and co-authored a 2023 paper.",
  },
  {
    id: "summary-v4",
    text: `Mehedi has ${experienceYearsLabel} years of experience in AI engineering and MLOps. At Projsite, he delivers production AI agents and real-time ML pipelines. At AlterSense, he scaled Kafka-based inference workflows and optimized detection performance in challenging environments. He holds a Magna Cum Laude BSc in CSE and a 2023 journal publication on flood potential modeling.`,
  },
  {
    id: "summary-v5",
    text: "Mehedi is an AI Engineer focused on production ML, stream processing, and scalable data platforms. At Projsite, he develops AI agent systems and model lifecycle workflows. At AlterSense, he built real-time camera-stream inference pipelines and improved robustness in noisy conditions. He graduated Magna Cum Laude in CSE and published flood-risk research in 2023.",
  },
  {
    id: "summary-v6",
    text: "Mehedi combines ML expertise with strong engineering execution across data and deployment. At Projsite, he builds context-aware AI agents and production model pipelines. At AlterSense, he developed distributed streaming inference architecture and improved throughput through GPU optimization. He earned a 3.77/4.00 CSE degree with Magna Cum Laude honors and published in 2023.",
  },
  {
    id: "summary-v7",
    text: "Mehedi is an AI/ML engineer with a record of building scalable production systems. At Projsite, he develops AI agents, maintains MLOps pipelines, and integrates ML into core workflows. At AlterSense, he built Kafka-powered real-time inference architecture and optimized GPU performance with TensorRT. He holds a Magna Cum Laude BSc in CSE and a 2023 publication.",
  },
];

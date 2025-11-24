export const projectsData = [
    {
        id: 1,
        title: "Real-Time POS Sync System",
        description: "Built a scalable real-time synchronization system for offline POS clients using Kafka and WebSocket, handling 140K+ daily transactions.",
        technologies: ["Kafka", "WebSocket", "Redis", "Java"],
        highlights: [
            "40% latency reduction",
            "99.9% uptime",
            "Zero data loss"
        ],
        problem: "Offline POS clients needed to sync data (items, coupons) in real-time with the central server. The existing polling mechanism was inefficient and caused high latency.",
        solution: "Implemented a hybrid approach using Kafka for event streaming and WebSockets for real-time push updates. Used Redis for caching to reduce database load.",
        reasoning: "Kafka ensures durability and ordering of events, while WebSockets provide low-latency communication. Redis acts as a high-speed buffer for frequently accessed data."
    },
    {
        id: 2,
        title: "Multi-Level Circuit Breaker",
        description: "Architected fault-tolerant circuit breaker system using Redis Sorted Sets for distributed systems with high contention.",
        technologies: ["Redis", "Java", "Distributed Systems"],
        highlights: [
            "Global, Shop, Counter levels",
            "Fault tolerance",
            "High availability"
        ],
        problem: "Cascading failures in one shop or counter could bring down the entire system during high traffic periods.",
        solution: "Designed a multi-level circuit breaker (Global, Shop, Counter) using Redis Sorted Sets to track failure rates and trip circuits at appropriate granularities.",
        reasoning: "Redis Sorted Sets allow for efficient sliding window counters to track error rates in real-time. The multi-level design isolates failures, preventing system-wide outages."
    }
    // Add more projects here in the future
    // Example:
    // {
    //   id: 3,
    //   title: "Your New Project",
    //   description: "Project description",
    //   technologies: ["Tech1", "Tech2"],
    //   highlights: ["Achievement 1", "Achievement 2"]
    // }
];

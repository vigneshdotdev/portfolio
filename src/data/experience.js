export const experienceData = [
    {
        id: 1,
        role: "Member Technical Staff",
        company: "Zoho Corporation",
        location: "Chennai, Tamil Nadu",
        duration: "Aug 2022 – Present",
        achievements: [
            "Led architecture and technical design for Core POS modules (Sales Processing, Data Sync), mentoring 2 junior engineers through design reviews and code reviews; achieved 99.9% uptime and zero data loss across 140K+ daily transactions in production multi-tenant environment.",
            "Built automated real-time sync workflow using Kafka microservices and WebSocket for offline POS clients (Android, iOS, Windows), enabling master data updates (items, coupons, preferences) and real-time stock synchronization with automated conflict resolution.",
            "Drove architectural decision to implement CQRS-derived event-driven storage, eliminating 99% HTTP sync calls; reduced fan-out overhead from O(n) to O(1), improving data freshness 30% and reducing conflicts 98% through event-driven workflow optimization.",
            "Designed and implemented multi-level circuit breakers (Global, Shop, Counter) with Redis Sorted Sets for fault tolerance in high contention distributed systems; collaborated with operations team to ensure reliability and scaling across 1000+ retail locations.",
            "Optimized performance through multiple caching strategies, cutting database load by 250M queries daily and raising cache hit rate from 84.3% to 98.1% using Redis/JVM multi-level caching with automated invalidation.",
            "Engineered reliable sales sync using Transactional Outbox pattern with distributed Redis Sorted Sets; built automated recovery mechanism to identify and retry incomplete transactions, maintaining 99.9% consistency across organizations.",
            "Managed full SDLC ownership including design patterns, code reviews, Git source control, build automation, testing frameworks, and production operations for critical sales processing systems."
        ]
    }
    // Add more experiences here in the future
];

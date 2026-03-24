export const QUIZ_DATA = {
  spring: {
    name: "Spring Boot",
    icon: "🍃",
    questions: [
      {
        q: "Which annotation marks a class as a Spring-managed component?",
        options: ["@Component", "@Entity", "@Controller", "@Repository"],
        answer: 0,
        explanation:
          "@Component is the generic stereotype annotation. @Controller, @Service and @Repository are specialisations of it.",
      },
      {
        q: "What does @Transactional ensure at the method level?",
        options: [
          "Thread safety",
          "All DB operations in the method run in a single transaction",
          "The method runs asynchronously",
          "Caches the method return value",
        ],
        answer: 1,
        explanation:
          "@Transactional wraps the method in a database transaction, rolling back on unchecked exceptions by default.",
      },
      {
        q: "Which scope makes a bean created once per HTTP request?",
        options: ["singleton", "prototype", "request", "session"],
        answer: 2,
        explanation:
          "request scope creates a new bean instance for each HTTP request. singleton (default) shares one instance across the whole application context.",
      },
      {
        q: "What is Spring Boot's auto-configuration mechanism based on?",
        options: [
          "XML config files",
          "@EnableAutoConfiguration + classpath scanning",
          "Annotations only",
          "YAML files",
        ],
        answer: 1,
        explanation:
          "@EnableAutoConfiguration (included in @SpringBootApplication) triggers Spring Boot to automatically configure beans based on what's on the classpath.",
      },
      {
        q: "Which annotation is used to inject properties from application.properties?",
        options: ["@Inject", "@Value", "@Autowired", "@Resource"],
        answer: 1,
        explanation:
          "@Value('${property.key}') injects a property value. For structured configuration, @ConfigurationProperties is preferred.",
      },
      {
        q: "What does Spring Boot Actuator provide?",
        options: [
          "Database migrations",
          "Production-ready monitoring endpoints",
          "API documentation",
          "Security filters",
        ],
        answer: 1,
        explanation:
          "Actuator exposes endpoints like /health, /metrics, /env to monitor and manage your application in production.",
      },
      {
        q: "Which HTTP status does Spring return when a @Valid annotated request body fails validation?",
        options: [
          "400 Bad Request",
          "401 Unauthorized",
          "404 Not Found",
          "500 Internal Server Error",
        ],
        answer: 0,
        explanation:
          "A validation failure from @Valid triggers a MethodArgumentNotValidException, which Spring maps to 400 Bad Request by default.",
      },
      {
        q: "What is the default embedded server in Spring Boot?",
        options: ["Jetty", "Undertow", "Apache Tomcat", "GlassFish"],
        answer: 2,
        explanation:
          "Spring Boot uses embedded Apache Tomcat by default. You can swap it for Jetty or Undertow by excluding the Tomcat starter.",
      },
      {
        q: "Which annotation exposes a class's methods as REST endpoints?",
        options: ["@Controller", "@RestController", "@Service", "@Component"],
        answer: 1,
        explanation:
          "@RestController is a convenience annotation combining @Controller and @ResponseBody, serialising return values to JSON automatically.",
      },
      {
        q: "How does @SpringBootApplication combine other annotations?",
        options: [
          "It replaces @Bean",
          "It combines @Configuration, @EnableAutoConfiguration, and @ComponentScan",
          "It combines @Entity and @Repository",
          "It combines @RestController and @Service",
        ],
        answer: 1,
        explanation:
          "@SpringBootApplication is a meta-annotation that includes @Configuration, @EnableAutoConfiguration, and @ComponentScan — the three annotations typically needed to bootstrap a Spring Boot app.",
      },
    ],
  },
  java: {
    name: "Java Core",
    icon: "☕",
    questions: [
      {
        q: "What is the output of: System.out.println(0.1 + 0.2 == 0.3);",
        options: ["true", "false", "Compilation error", "Runtime exception"],
        answer: 1,
        explanation:
          "Floating-point arithmetic (double) cannot represent 0.1 and 0.2 exactly, so 0.1 + 0.2 results in 0.30000000000000004, not 0.3. Always use BigDecimal for precise decimal math.",
      },
      {
        q: "Which collection guarantees insertion-order and allows null?",
        options: ["HashSet", "TreeSet", "LinkedHashSet", "EnumSet"],
        answer: 2,
        explanation:
          "LinkedHashSet maintains insertion order using a doubly-linked list and allows a single null. HashSet allows null but has no order. TreeSet is sorted but does not allow null.",
      },
      {
        q: "What is the difference between == and .equals() for String?",
        options: [
          "No difference",
          "== compares references, .equals() compares character content",
          "== compares content, .equals() compares references",
          "Both compare references",
        ],
        answer: 1,
        explanation:
          "== compares object references (memory address). .equals() compares the actual character sequence. Two String objects with the same content will fail == unless they're the same interned reference.",
      },
      {
        q: "Which Java 8 feature allows lazy evaluation of a potentially null value?",
        options: ["Future", "CompletableFuture", "Optional", "Supplier"],
        answer: 2,
        explanation:
          "Optional<T> is a container that may or may not hold a value. Methods like .orElse() and .orElseGet() allow safe, readable null handling without NullPointerExceptions.",
      },
      {
        q: "What does the volatile keyword guarantee?",
        options: [
          "Thread-safety for compound operations",
          "Visibility of a variable's value across threads",
          "Atomic increment",
          "Mutual exclusion",
        ],
        answer: 1,
        explanation:
          "volatile ensures that reads/writes of a variable go directly to main memory, not a thread-local cache. It guarantees visibility but NOT atomicity — use AtomicInteger for that.",
      },
      {
        q: "Which interface should you implement for custom object sorting with Collections.sort()?",
        options: ["Comparable<T>", "Comparator<T>", "Sortable", "Ordered"],
        answer: 0,
        explanation:
          "Comparable<T> defines the natural ordering of a class via compareTo(). Comparator<T> is used for external/custom sorting strategies without modifying the class.",
      },
      {
        q: "What does the try-with-resources statement ensure?",
        options: [
          "The resource is cached",
          "The resource's close() method is called automatically",
          "The resource is shared across threads",
          "The resource is created lazily",
        ],
        answer: 1,
        explanation:
          "try-with-resources (Java 7+) calls AutoCloseable.close() on the declared resource when the block exits, even if an exception is thrown — eliminating boilerplate finally blocks.",
      },
      {
        q: "In Java generics, what does the wildcard '? extends Number' mean?",
        options: [
          "Any type",
          "Any subtype of Number (upper bound)",
          "Any supertype of Number (lower bound)",
          "Only Number itself",
        ],
        answer: 1,
        explanation:
          "? extends Number is an upper-bounded wildcard — it accepts Number or any of its subclasses (Integer, Double, etc). Use ? super Number for lower-bounded wildcards.",
      },
      {
        q: "What is the purpose of the transient keyword?",
        options: [
          "Marks a field as thread-safe",
          "Excludes a field from Java serialization",
          "Makes a field immutable",
          "Enables lazy initialization",
        ],
        answer: 1,
        explanation:
          "transient tells the JVM to skip that field during serialization. Useful for sensitive data (passwords) or fields that can be recomputed (caches).",
      },
      {
        q: "Which Java collection is thread-safe without external synchronization?",
        options: ["ArrayList", "HashMap", "ConcurrentHashMap", "LinkedList"],
        answer: 2,
        explanation:
          "ConcurrentHashMap uses segment-level locking (Java 7) and CAS operations (Java 8+) for thread-safe concurrent access. ArrayList and HashMap are not thread-safe.",
      },
    ],
  },
  docker: {
    name: "Docker & DevOps",
    icon: "🐳",
    questions: [
      {
        q: "What does a Dockerfile's COPY instruction do?",
        options: [
          "Copies a running container",
          "Copies files from host into image",
          "Copies environment variables",
          "Copies a network configuration",
        ],
        answer: 1,
        explanation:
          "COPY <src> <dest> copies files from the build context (your machine) into the Docker image filesystem at the specified destination path.",
      },
      {
        q: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
        options: [
          "No difference",
          "ENTRYPOINT defines the executable; CMD provides default arguments",
          "CMD runs first; ENTRYPOINT runs last",
          "CMD is for Linux; ENTRYPOINT is for Windows",
        ],
        answer: 1,
        explanation:
          "ENTRYPOINT sets the main command that always runs. CMD provides default arguments that can be overridden at runtime. Using both together is the preferred pattern.",
      },
      {
        q: "Which Docker command shows running containers?",
        options: [
          "docker list",
          "docker ps",
          "docker show",
          "docker containers",
        ],
        answer: 1,
        explanation:
          "docker ps shows running containers. docker ps -a shows all containers including stopped ones.",
      },
      {
        q: "What does docker-compose down --volumes do?",
        options: [
          "Stops containers only",
          "Stops and removes containers, networks, and named volumes",
          "Removes images only",
          "Rebuilds images",
        ],
        answer: 1,
        explanation:
          "docker-compose down removes containers and networks. Adding --volumes also deletes named volumes defined in the compose file — useful for a clean slate in development.",
      },
      {
        q: "What is a multi-stage Docker build used for?",
        options: [
          "Running multiple containers",
          "Building smaller final images by discarding build-time dependencies",
          "Building on multiple platforms simultaneously",
          "Parallel container startup",
        ],
        answer: 1,
        explanation:
          "Multi-stage builds let you use a full build image (with JDK, Maven etc.) and then copy only the compiled artifact into a slim runtime image, dramatically reducing the final image size.",
      },
      {
        q: "In CI/CD, what does 'continuous delivery' mean?",
        options: [
          "Every commit auto-deploys to production",
          "Every commit is automatically tested and the artifact is ready to deploy, but production deployment requires manual approval",
          "Continuous monitoring of production",
          "Rolling back failed deployments automatically",
        ],
        answer: 1,
        explanation:
          "Continuous Delivery ensures every change passes automated tests and produces a deployable artifact. The actual production deployment step remains manual. Continuous Deployment goes further and auto-deploys to production.",
      },
      {
        q: "Which Docker networking mode shares the host's network namespace?",
        options: ["bridge", "overlay", "host", "none"],
        answer: 2,
        explanation:
          "host mode removes network isolation — the container uses the host's IP and ports directly. bridge (default) creates an isolated network. overlay is for multi-host Swarm networks.",
      },
      {
        q: "What does the -p flag do in 'docker run -p 8080:80'?",
        options: [
          "Sets the container priority",
          "Maps host port 8080 to container port 80",
          "Exposes port 80 only",
          "Sets memory to 8080MB",
        ],
        answer: 1,
        explanation:
          "-p <host_port>:<container_port> publishes a container port to the host. Traffic to host:8080 is forwarded to the container's port 80.",
      },
      {
        q: "What is a Docker volume primarily used for?",
        options: [
          "Network configuration",
          "Persisting data outside the container lifecycle",
          "Sharing CPU resources",
          "Configuring environment variables",
        ],
        answer: 1,
        explanation:
          "Volumes store data that survives container restarts and removal. Without a volume, data written inside a container is lost when the container is deleted.",
      },
      {
        q: "In GitHub Actions, what is a 'job'?",
        options: [
          "A single shell command",
          "A set of steps that run on the same runner",
          "A trigger event",
          "A deployment environment",
        ],
        answer: 1,
        explanation:
          "A job is a group of steps that execute sequentially on the same runner (virtual machine). Multiple jobs in a workflow can run in parallel by default.",
      },
    ],
  },
  sql: {
    name: "PostgreSQL / SQL",
    icon: "🐘",
    questions: [
      {
        q: "What does the EXPLAIN ANALYZE command do in PostgreSQL?",
        options: [
          "Shows table schema",
          "Executes the query and shows the actual execution plan with timing",
          "Only estimates the plan without executing",
          "Shows index definitions",
        ],
        answer: 1,
        explanation:
          "EXPLAIN ANALYZE actually runs the query and returns the execution plan with real timing and row counts — essential for identifying slow queries and missing indexes.",
      },
      {
        q: "What is a covering index?",
        options: [
          "An index that covers all rows",
          "An index that includes all columns needed by a query, avoiding a table lookup",
          "An index on a primary key",
          "A partial index with a WHERE clause",
        ],
        answer: 1,
        explanation:
          "A covering index includes all columns referenced in a query (SELECT and WHERE), allowing PostgreSQL to answer the query from the index alone without accessing the main table (heap). This is called an index-only scan.",
      },
      {
        q: "Which isolation level prevents phantom reads?",
        options: [
          "Read Uncommitted",
          "Read Committed",
          "Repeatable Read",
          "Serializable",
        ],
        answer: 3,
        explanation:
          "Serializable is the strictest isolation level and prevents dirty reads, non-repeatable reads, and phantom reads by making concurrent transactions behave as if they ran serially.",
      },
      {
        q: "What is the difference between INNER JOIN and LEFT JOIN?",
        options: [
          "No difference",
          "INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table plus matched rows from the right",
          "LEFT JOIN is faster",
          "INNER JOIN allows NULLs in results",
        ],
        answer: 1,
        explanation:
          "INNER JOIN returns rows where there's a match in both tables. LEFT JOIN returns ALL rows from the left table; unmatched right-side columns are NULL.",
      },
      {
        q: "What does a B-tree index NOT efficiently support?",
        options: [
          "Equality checks (=)",
          "Range queries (<, <=, >, >=)",
          "Full-text search",
          "ORDER BY with indexed columns",
        ],
        answer: 2,
        explanation:
          "B-tree indexes are optimised for equality and range queries. Full-text search requires a GIN (Generalized Inverted Index) or GiST index in PostgreSQL.",
      },
      {
        q: "What is the purpose of a database transaction's ROLLBACK?",
        options: [
          "Commits the transaction",
          "Undoes all changes made in the current transaction",
          "Locks the table",
          "Creates a savepoint",
        ],
        answer: 1,
        explanation:
          "ROLLBACK aborts the current transaction and undoes all changes made since BEGIN. It restores the database to the state it was in before the transaction started.",
      },
      {
        q: "What does the COALESCE function do?",
        options: [
          "Concatenates strings",
          "Returns the first non-NULL value in a list",
          "Rounds a number",
          "Converts data types",
        ],
        answer: 1,
        explanation:
          "COALESCE(val1, val2, ...) evaluates arguments left to right and returns the first non-NULL value. It's the standard SQL way to substitute a default for NULL.",
      },
      {
        q: "When should you use a partial index in PostgreSQL?",
        options: [
          "When the table has few rows",
          "When you frequently query a subset of rows (e.g., WHERE status = 'active')",
          "When you need full-text search",
          "When the column has many NULLs and no queries filter on it",
        ],
        answer: 1,
        explanation:
          "A partial index only indexes rows satisfying a WHERE condition. If you mostly query active orders, an index WHERE status = 'active' is smaller and faster than indexing all rows.",
      },
      {
        q: "What does the N+1 query problem describe?",
        options: [
          "Having more than one primary key",
          "Fetching a list of N entities and then executing N additional queries to fetch related data",
          "Using more than N indexes",
          "Having N transactions in parallel",
        ],
        answer: 1,
        explanation:
          "N+1 occurs when you fetch a list (1 query), then loop over results issuing one query per item (N queries). Solve it with JOIN, fetch joins (JPA), or batch loading strategies.",
      },
      {
        q: "What is a database sequence used for?",
        options: [
          "Ordering query results",
          "Generating unique numeric values, typically for primary keys",
          "Encrypting columns",
          "Scheduling jobs",
        ],
        answer: 1,
        explanation:
          "A sequence is a database object that generates unique, auto-incrementing numbers. In PostgreSQL, SERIAL and BIGSERIAL column types use sequences internally. Sequences are transaction-safe and never repeat.",
      },
    ],
  },
  system: {
    name: "System Design",
    icon: "🏗️",
    questions: [
      {
        q: "What does CAP theorem state?",
        options: [
          "A distributed system can guarantee all three: Consistency, Availability, and Partition tolerance",
          "A distributed system can only guarantee two of three: Consistency, Availability, Partition tolerance",
          "CAP only applies to SQL databases",
          "Consistency is always more important than Availability",
        ],
        answer: 1,
        explanation:
          "CAP theorem (Brewer, 2000) states a distributed system can only fully guarantee two of the three properties simultaneously when a network partition occurs. Most systems choose CP or AP.",
      },
      {
        q: "What is the primary purpose of a message queue like Kafka?",
        options: [
          "Storing user sessions",
          "Decoupling producers and consumers, enabling async communication and buffering",
          "Caching database results",
          "Load balancing HTTP requests",
        ],
        answer: 1,
        explanation:
          "Message queues decouple services — producers publish messages without knowing consumers, and consumers process at their own pace. This adds resilience, scalability, and async processing capabilities.",
      },
      {
        q: "What distinguishes a cache-aside pattern from read-through?",
        options: [
          "No difference",
          "Cache-aside: application manages cache explicitly; Read-through: cache fetches from DB on miss automatically",
          "Cache-aside is faster always",
          "Read-through only works with Redis",
        ],
        answer: 1,
        explanation:
          "Cache-aside (lazy loading): app checks cache first, fetches from DB on miss, then populates cache. Read-through: cache sits in front of DB and fetches missing data transparently. Cache-aside gives more control; read-through simplifies code.",
      },
      {
        q: "What is eventual consistency?",
        options: [
          "Data is always immediately consistent",
          "Given no new updates, all nodes will eventually converge to the same value",
          "Updates are rejected during partitions",
          "Only the primary node is consistent",
        ],
        answer: 1,
        explanation:
          "Eventual consistency (BASE) guarantees that if no new updates are made, all replicas will eventually hold the same value. It trades immediate consistency for higher availability and performance.",
      },
      {
        q: "What is horizontal scaling?",
        options: [
          "Upgrading a single server (more CPU/RAM)",
          "Adding more servers to distribute the load",
          "Scaling the database vertically",
          "Reducing the number of microservices",
        ],
        answer: 1,
        explanation:
          "Horizontal scaling (scale out) adds more machines to share load. Vertical scaling (scale up) adds more resources to existing machines. Horizontal scaling is generally more cost-effective and resilient at large scale.",
      },
      {
        q: "What problem does a circuit breaker pattern solve?",
        options: [
          "SQL injection attacks",
          "Cascading failures when a downstream service is slow or unavailable",
          "Race conditions in multi-threading",
          "Data consistency in distributed transactions",
        ],
        answer: 1,
        explanation:
          "A circuit breaker monitors failures to a downstream service. When failures exceed a threshold, it 'opens' and returns errors immediately (fast fail) instead of waiting for timeouts, preventing cascading failures.",
      },
      {
        q: "What is the purpose of database sharding?",
        options: [
          "Encrypting data at rest",
          "Horizontally partitioning data across multiple DB instances to handle large datasets",
          "Replicating data for read performance",
          "Backing up the database",
        ],
        answer: 1,
        explanation:
          "Sharding splits data across multiple database instances (shards) by a shard key. Each shard holds a subset of data. This allows horizontal scaling beyond what a single DB instance can handle.",
      },
      {
        q: "What is idempotency in API design?",
        options: [
          "An API that always returns 200",
          "Making the same request multiple times produces the same result as making it once",
          "An API that requires authentication",
          "An API with no side effects",
        ],
        answer: 1,
        explanation:
          "An idempotent operation can be applied multiple times without changing the result. GET, PUT, DELETE are idempotent; POST is not by default. Idempotency is critical for safe retries in distributed systems.",
      },
      {
        q: "What is the difference between a load balancer and an API gateway?",
        options: [
          "No functional difference",
          "A load balancer distributes traffic across servers; an API gateway handles cross-cutting concerns (auth, rate limiting, routing)",
          "API gateways are load balancers",
          "Load balancers handle authentication",
        ],
        answer: 1,
        explanation:
          "A load balancer's primary job is traffic distribution. An API gateway is a smarter entry point that handles authentication, rate limiting, SSL termination, request routing, and sometimes transformation — often built on top of a load balancer.",
      },
      {
        q: "What is the two-phase commit (2PC) protocol used for?",
        options: [
          "Database backups",
          "Ensuring atomicity across multiple distributed database nodes in a distributed transaction",
          "Encrypting messages in transit",
          "Electing a primary node",
        ],
        answer: 1,
        explanation:
          "2PC ensures all participating nodes either commit or rollback a distributed transaction. Phase 1: coordinator asks all nodes to prepare (vote). Phase 2: if all vote yes, commit — otherwise rollback. It's reliable but introduces blocking.",
      },
    ],
  },
};

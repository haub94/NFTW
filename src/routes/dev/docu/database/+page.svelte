
<div class="space-y-12 ">
    <!--supabase-->
    <div id="Supabase" class="bg-white py-12 rounded-lg">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h3 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Supabase</h3>
            <div class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
                <p>Supabase is an open-source platform that provides developers with a set of tools and services to build scalable and secure applications. It combines the power of a robust PostgreSQL database with a real-time subscription system, making it easier for developers to create and manage their backend infrastructure. Supabase also offers authentication, authorization, and storage features, allowing developers to quickly build web and mobile applications with ease.</p>
                <div class="mt-8">
                    
                    <p>Supabase provides developers with a secure and straightforward authentication method through its platform. It offers a range of authentication providers, including email/password, Google, GitHub, and others, allowing users to choose their preferred method of authentication.
                    To implement authentication with Supabase, developers can utilize the Supabase Auth SDK, which provides a set of client-side methods and utilities. These methods allow users to sign up, sign in, and manage their authentication sessions.</p>                
                    <p>The authentication flow typically involves the following steps:</p>
                    <ol class="list-decimal pl-8 py-4 space-y-4">
                        <li class="pl-1">User Registration: Users can sign up using their email address and a password or by using their social media accounts such as Google or GitHub. Supabase handles the storage and encryption of user credentials securely.</li>
                        <li class="pl-1">User Login: Once registered, users can log in using their chosen authentication method. Supabase verifies the user's credentials and returns an authentication token.</li>
                        <li class="pl-1">Access Control: With the authentication token, the client-side application can make authenticated requests to Supabase services, such as accessing protected resources or performing authorized actions.</li>
                        <li class="pl-1">Session Management: Supabase manages the user's authentication session, handling session expiration, and refreshing tokens as needed. This allows users to stay logged in across sessions.</li>
                    </ol>
                    <p class="font-semibold">The URL to the database (which also contains the password) must be stored in an .env file in the project. The URL can be requested from the NFTW Adventures project manager.</p>
                    <p class="pt-4">► The following example shows the content of a corresponding .env file:</p>
                    <p class="pl-8 font-extrabold">DATABASE_URL="postgres://postgres:[DB-PASSWORD]@db.[DB-IDENTIFIER].supabase.co:5432/postgres"</p>
                    <p class="pt-4">► To learn more, you should visit the <a class="font-semibold text-NFTW-pink-400" href="https://supabase.com/docs">developer documentation.</a></p>
                </div>     
            </div>
            </div>
        </div>
        </div>
    </div>

    <!--prisma-->
    <div id="Prisma" class="bg-white py-12 rounded-lg">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h3 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Prisma</h3>
            <div class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
                <p>Prisma is an open-source database toolkit and ORM that simplifies database access and management in application development. It offers features like schema generation, query building, and type-safe database clients. Prisma supports multiple databases and integrates well with frameworks like Express.js and Next.js.</p>
                <div class="mt-8">
                    
                    <p>The following steps describe the main functionalities of the Prisma client:</p>
                    <ol class="list-decimal pl-8 py-4 space-y-4">
                        <li class="pl-1">Installation: Begin by installing the Prisma CLI (Command Line Interface) globally on your machine using npm or yarn.</li>
                        <li class="pl-1">Configuration: Create a prisma directory in your project and define a schema.prisma file. This file serves as the configuration for your database and includes information such as the database provider, connection details, and data models.</li>
                        <li class="pl-1">Define Data Models: In the schema.prisma file, define your data models using Prisma's declarative language. Data models represent the tables or collections in your database and their relationships.</li>
                        <li class="pl-1">Generate Prisma Client: Use the Prisma CLI to generate the Prisma client based on your defined data models. The client provides a type-safe and intuitive API for querying and manipulating the database.</li>
                        <li class="pl-1">Querying Data: With the Prisma client, you can write database queries using the Prisma Query API. Prisma offers a fluent and type-safe query syntax that allows you to perform various CRUD (Create, Read, Update, Delete) operations on your data.</li>
                        <li class="pl-1">Relationships and Joins: Prisma simplifies handling relationships between data models. You can define one-to-one, one-to-many, or many-to-many relationships in your data models and easily perform joins and nested queries to fetch related data.</li>
                        <li class="pl-1">Database Migrations: Prisma supports database migrations to manage changes to your database schema. You can use the Prisma CLI to generate migration files based on your schema changes and apply them to your database.</li>
                    </ol>
                    <p class="pt-4">► To learn more, you should visit the <a class="font-semibold text-NFTW-pink-400" href="https://www.prisma.io/docs">developer documentation.</a></p>
                </div>     
            </div>
            </div>
        </div>
        </div>
    </div>


</div>  
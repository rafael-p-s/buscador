export async function headers() {
    return [
        {
            source: `/:path*`,
            headers: [
                { key: `Access-Control-Allow-Credentials`, value: `true` },
                { key: `Access-Control-Allow-Origin`, value: `*` },
                { key: `Access-Control-Allow-Methods`, value: `GET, POST, OPTIONS, PUT, PATCH, DELETE` },
                { key: `Access-Control-Allow-Headers`, value: `*` }
            ],
        },
    ];
}
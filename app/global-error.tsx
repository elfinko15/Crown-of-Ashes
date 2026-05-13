'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ background: '#0f0f0f', color: '#fff', fontFamily: 'monospace', padding: '40px', minHeight: '100vh' }}>
        <h2 style={{ color: '#f87171', marginBottom: '16px' }}>Application Error</h2>
        <pre style={{ background: '#1a1a1a', padding: '20px', borderRadius: '8px', overflowX: 'auto', color: '#fca5a5', fontSize: '13px' }}>
          {error?.message ?? 'Unknown error'}
          {error?.stack ? '\n\n' + error.stack : ''}
        </pre>
        {error?.digest && (
          <p style={{ color: '#6b7280', marginTop: '12px', fontSize: '12px' }}>Digest: {error.digest}</p>
        )}
        <button
          onClick={reset}
          style={{ marginTop: '24px', padding: '10px 20px', background: '#fff', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Retry
        </button>
      </body>
    </html>
  )
}

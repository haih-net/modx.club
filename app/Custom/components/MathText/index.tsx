import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import katexStyles from 'katex/dist/katex.min.css?url'

export const MathText: React.FC<{ value: string }> = ({ value }) => (
  <>
    <link rel="stylesheet" href={katexStyles} precedence="default" />
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{ p: ({ children }) => <>{children}</> }}
    >
      {`$${value}$`}
    </ReactMarkdown>
  </>
)

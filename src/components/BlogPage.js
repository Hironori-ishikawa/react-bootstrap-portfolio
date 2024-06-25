import React from 'react'

export const BlogPage = () => {
  return (
    <div className='container'>
      <p className='BlogTitle'>Blog</p>
      <p>
        <a href="https://nextjs-blog-app-one-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">TECH BLOG</a>
      </p>
      <div>
        Next.jsによるテックブログです。
      </div>
      <p>
        主に学習の記録として記入してます。<br />
        Next.jsのキャッチアップのために作成しました。<br />
        tailwindcssとsupabaseを使用してます。<br />
      </p>

    </div>
  );
};

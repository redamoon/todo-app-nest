/**
 * ユーザ情報を登録する
 * @param name
 * @param email
 */
export const createUser = async (name: string, email: string) => {
  const res = await fetch('/api/users', {  // Nest.js サーバーにリクエストを送る
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  });

  if (!res.ok) {
    throw new Error('Failed to create user');
  }

  return res.json();
};

'use client';
import Layout from '@/components/layout/layout';
import Input from '@/components/common/input';
import { useState } from 'react';
import type { RegisterFormData } from '@/types/user';
import Card from '@/components/common/card';

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Layout>
      <Card>
        <div>
          <h1>Register</h1>

          <form>
            <Input
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              className="border p-2 mb-3"
            />
            <Input
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              type="text"
              name="username"
              id="username"
              className="border p-2 mb-3"
            />
            <Input
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              className="border p-2 mb-3"
            />
          </form>
        </div>
      </Card>
    </Layout>
  );
}

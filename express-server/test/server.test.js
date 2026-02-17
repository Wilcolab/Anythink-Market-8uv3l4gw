const request = require('supertest');
const app = require('../src/app');

describe('Express API', () => {
  test('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });

  test('GET /tasks should return tasks list', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('tasks');
    expect(Array.isArray(res.body.tasks)).toBe(true);
  });

  test('POST /tasks should add a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ text: 'New test task' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task added successfully');

    const follow = await request(app).get('/tasks');
    expect(follow.body.tasks).toContain('New test task');
  });

  test('POST /tasks with invalid payload should return 400', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('Unknown route should return 404', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error', 'Not Found');
  });
});

import '@testing-library/jest-dom'
import { POST } from '@/app/api/saque/route'

// Mock the global Response class
global.Response = class {
    constructor(body, init) {
        this.body = body;
        this.status = init.status;
    }
    async json() {
        return JSON.parse(this.body);
    }
};

describe('/api/saque', () => {
    it('should return the correct response for a valid request of 380', async () => {
        const req = {
            json: async () => ({ valor: 380 })
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        const response = await POST(req, res);
        const result = await response.json();

        expect(response.status).toBe(200);
        expect(result).toEqual({
            100: 3,
            50: 1,
            20: 1,
            10: 1,
            5: 0,
            2: 0,
        });
    });

    it('should return the suggested withdrawal for an input value of 13', async () => {
        const req = {
            json: async () => ({ valor: 13 })
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        const response = await POST(req, res);
        const result = await response.json();

        expect(response.status).toBe(406);
        expect(result).toEqual({ suggested: 12 });
    });

    it('should return an error for an invalid request', async () => {
        const req = {
            json: async () => ({ valor: -1 })
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        const response = await POST(req, res);
        const result = await response.json();

        expect(response.status).toBe(400);
        expect(result).toEqual({ error: 'Valor invalido' });
    });
});

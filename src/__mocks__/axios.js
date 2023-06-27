const mockResponse = {
    data: [
        {
            id: 33,
            name: 'T-Shirt with Logo',
            price: 18,
            images: [
                {
                    src: 'https://mystore.local/wp-content/uploads/2019/01/t-shirt-with-logo-1.jpg'
                }
            ]
        }
    ]
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
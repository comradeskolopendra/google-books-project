const request = (url: string, options: object = {}): Promise<any> => fetch(url, options).then(response => response.json());

export { request };

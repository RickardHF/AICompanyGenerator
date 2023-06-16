

export default async function getCompanyInfo(req, res) {

    console.log(req);
    const load = {
        input: req.input,
    }

    console.log(load);
    
        const response = await fetch(`${process.env.API_URL}/api/v1/company`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(load)
        });
    

    console.log(response);

    const data = await response.json();

    res.status(200).json(data);
}
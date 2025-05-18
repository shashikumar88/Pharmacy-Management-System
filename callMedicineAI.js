async function callMedicineAI(symptoms) {
    const response = await fetch('https://api.medicine.ai/v1/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            symptoms: symptoms,
            location: getUserLocation(), // if location-based results needed
            language: 'en'
        })
    });
    
    if (!response.ok) {
        throw new Error('API request failed');
    }
    
    return await response.json();
}
'use client';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Loader2, Search } from 'lucide-react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      // Send GraphQL query to Yoga server
      const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              nlQuery(query: "${prompt}") {
                timestamp
                value
              }
            }
          `
        }),
      });
      
      const data = await res.json();
      setResult(data);
      setLoading(false);
    } catch (error) {
      console.error('Query error:', error);
      setLoading(false);
    }
  };

  // Prepare chart data
  const prepareChartData = () => {
    if (!result || !result.data || !result.data.nlQuery || !result.data.nlQuery.length) {
      return null;
    }

    const dataPoints = result.data.nlQuery;
    
    // Format date display
    const labels = dataPoints.map((point: { timestamp: string | number | Date; }) => {
      const date = new Date(point.timestamp);
      return date.toLocaleDateString('en-US');
    });
    
    const values = dataPoints.map((point: { value: any; }) => point.value);
    
    // Dynamically set chart title based on query
    let chartTitle = 'Ethereum Data';
    if (prompt.toLowerCase().includes('price')) {
      chartTitle = 'Ethereum Price';
    } else if (prompt.toLowerCase().includes('volume')) {
      chartTitle = 'Ethereum Trading Volume';
    } else if (prompt.toLowerCase().includes('transaction')) {
      chartTitle = 'Ethereum Transaction Data';
    }
    
    return {
      labels,
      datasets: [
        {
          label: chartTitle,
          data: values,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          tension: 0.1,
        },
      ],
    };
  };

  const chartData = prepareChartData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Ethereum Data Query Assistant</h1>
          <p className="text-gray-600">Use natural language to query Ethereum blockchain data</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="mb-6">
            <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
              What would you like to know?
            </label>
            <div className="relative">
              <input
                id="query"
                type="text"
                placeholder="Example: I want to check Ethereum price and volume for the past week"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="border border-gray-300 rounded-lg p-4 w-full pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleQuery()}
              />
              <button 
                onClick={handleQuery}
                disabled={loading || !prompt.trim()} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:bg-blue-300"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Search />}
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleQuery} 
            disabled={loading || !prompt.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:bg-blue-300 flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                <span>Querying...</span>
              </>
            ) : (
              <span>Submit Query</span>
            )}
          </button>
        </div>

        {loading && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
            <Loader2 className="animate-spin text-blue-600 text-2xl mx-auto mb-2" />
            <p className="text-gray-700">Processing your query, please wait...</p>
          </div>
        )}
        
        {result && !loading && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Query Results</h2>
            
            {chartData && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">Data Chart</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <Line 
                    data={chartData} 
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                        title: {
                          display: true,
                          text: 'Ethereum Data Trends',
                        },
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              let label = context.dataset.label || '';
                              if (label) {
                                label += ': ';
                              }
                              if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { 
                                  style: 'currency', 
                                  currency: 'USD',
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                }).format(context.parsed.y);
                              }
                              return label;
                            }
                          }
                        }
                      },
                      scales: {
                        y: {
                          ticks: {
                            callback: function(value) {
                              return '$' + value.toLocaleString('en-US');
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
                
                {result.data.nlQuery.length > 0 && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {result.data.nlQuery.map((point: any, index: number) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(point.timestamp).toLocaleDateString('en-US')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${point.value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

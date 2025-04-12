'use client'
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import 'chart.js/auto';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
);

export const Achievements = () => {
    return (
        <section id="achievements" className="py-20 px-4 bg-background text-center">
            <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {/* 1. Successful Campaigns + Pie */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">350+ Successful Campaigns</h3>
                    <Pie
                        data={{
                            labels: ['PPC', 'SEO', 'Social', 'Affiliate'],
                            datasets: [{
                                data: [30, 25, 25, 20],
                                backgroundColor: ['#F76680', '#57007B', '#7F56D9', '#00B8D9'],
                            }]
                        }}
                        className="max-w-[240px]"
                    />
                </div>

                {/* 2. Revenue Generated + Line */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">$12M+ Revenue Generated</h3>
                    <Line
                        data={{
                            labels: ['2022', '2023', '2024', '2025'],
                            datasets: [{
                                label: 'Revenue (M)',
                                data: [2, 5, 9, 12],
                                backgroundColor: '#57007B',
                                borderColor: '#57007B',
                            }]
                        }}
                        className="max-w-[300px]"
                    />
                </div>

                {/* 3. Retention Rate + Bar */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">85% Client Retention Rate</h3>
                    <Bar
                        data={{
                            labels: ['Industry Avg', 'Our Rate'],
                            datasets: [{
                                label: '% Retention',
                                data: [60, 85],
                                backgroundColor: ['#CBD5E0', '#57007B']
                            }]
                        }}
                        className="max-w-[300px]"
                    />
                </div>

                {/* 4. Organic Visitors + Trend Line */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">500K+ Organic Visitors</h3>
                    <Line
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Visitors',
                                data: [20000, 40000, 100000, 200000, 350000, 500000],
                                backgroundColor: '#00B8D9',
                                borderColor: '#00B8D9',
                            }]
                        }}
                        className="max-w-[300px]"
                    />
                </div>

                {/* 5. Affiliate Partnerships */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">200+ Affiliate Partnerships</h3>
                    <div className="text-5xl font-bold text-primary mt-6">200+</div>
                </div>

                {/* 6. CTR Boost + Bar Compare */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">98% Ad Click-Through Rate Boost</h3>
                    <Bar
                        data={{
                            labels: ['Before', 'After'],
                            datasets: [{
                                label: '% CTR',
                                data: [45, 98],
                                backgroundColor: ['#CBD5E0', '#57007B']
                            }]
                        }}
                        className="max-w-[300px]"
                    />
                </div>
            </div>
        </section>
    );
};
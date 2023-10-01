 <h2>Express MySQL API Readme</h2>
                                    <p>This README provides a detailed explanation of the provided Node.js application,
                                      which serves as an API to interact with a MySQL database using the Express
                                      framework. This API allows you to perform basic CRUD (Create, Read, Update,
                                      Delete) operations on a database table named
                                      <code>${process.env.TABLE_NAME}</code>.</p>
                                    <h3>Prerequisites</h3>
                                    <p>Before you begin, make sure you have the following installed:</p>
                                    <ul>
                                      <li>
                                        <p><strong>Node.js:</strong> Ensure you have Node.js installed on your system.
                                          If not, you can download it from <a href="https://nodejs.org/"
                                            target="_new">nodejs.org</a>.</p>
                                      </li>
                                      <li>
                                        <p><strong>MySQL Database:</strong> Set up a MySQL database and create a table
                                          with the name specified in your <code>.env</code> file as
                                          <code>${process.env.TABLE_NAME}</code>. The table should have columns
                                          corresponding to the fields mentioned in the API endpoint
                                          <code>/person</code>.</p>
                                      </li>
                                      <li>
                                        <p><strong>Environment Variables:</strong> Create a <code>.env</code> file in
                                          the root directory of your project. Define the following variables in the
                                          <code>.env</code> file:</p>
                                        <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>makefile</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-makefile">DB_HOST=your_database_host
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
TABLE_NAME=your_table_name
</code></div></div></pre>
                                      </li>
                                    </ul>
                                    <h3>Installation</h3>
                                    <ol>
                                      <li>
                                        <p><strong>Clone the Repository:</strong></p>
                                        <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/your-username/your-repository.git
</code></div></div></pre>
                                      </li>
                                      <li>
                                        <p><strong>Install Dependencies:</strong></p>
                                        <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> your-repository
npm install
</code></div></div></pre>
                                      </li>
                                    </ol>
                                    <h3>Usage</h3>
                                    <ol>
                                      <li>
                                        <p><strong>Run the Application:</strong></p>
                                        <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm start
</code></div></div></pre>
                                        <p>This will start the Express server, and it will be accessible at
                                          <code>http://localhost:3000</code>.</p>
                                      </li>
                                      <li>
                                        <p><strong>Make Requests:</strong></p>
                                        <ul>
                                          <li>
                                            <p><strong>GET Request:</strong>
                                              Perform a GET request to <code>http://localhost:3000/person</code> with
                                              query parameters to filter data based on the fields mentioned in the API
                                              endpoint.</p>
                                            <p>Example Request:</p>
                                            <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>http</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-http">GET http://localhost:3000/person?name=John&amp;surname=Doe
</code></div></div></pre>
                                            <p>Example Response:</p>
                                            <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>json</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">[</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"field1"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"value1"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"field2"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"value2"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-comment">// ...</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">]</span>
</code></div></div></pre>
                                          </li>
                                        </ul>
                                      </li>
                                    </ol>
                                    <h3>API Endpoint</h3>
                                    <ul>
                                      <li>
                                        <p><strong>GET <code>/person</code></strong></p>
                                        <ul>
                                          <li>
                                            <p><strong>Query Parameters:</strong></p>
                                            <ul>
                                              <li><code>name</code>: Filter by name</li>
                                              <li><code>surname</code>: Filter by surname</li>
                                              <li><code>tc</code>: Filter by TC number</li>
                                              <li><code>fathername</code>: Filter by father's name</li>
                                              <li><code>mothername</code>: Filter by mother's name</li>
                                              <li><code>dob</code>: Filter by date of birth</li>
                                              <li><code>province</code>: Filter by province</li>
                                              <li><code>provincedetail</code>: Filter by province detail</li>
                                              <li><code>mothertc</code>: Filter by mother's TC number</li>
                                              <li><code>fathertc</code>: Filter by father's TC number</li>
                                            </ul>
                                          </li>
                                          <li>
                                            <p><strong>Example Request:</strong></p>
                                            <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>http</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-http">GET http://localhost:3000/person?name=John&amp;surname=Doe
</code></div></div></pre>
                                          </li>
                                          <li>
                                            <p><strong>Example Response:</strong></p>
                                            <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>json</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">[</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"field1"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"value1"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"field2"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"value2"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-comment">// ...</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">]</span>
</code></div></div></pre>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                    <h3>Error Handling</h3>
                                    <ul>
                                      <li>If there's a database error, the API will respond with a JSON object
                                        containing an error message and a 500 status code.</li>
                                    </ul>
                                    <h3>CORS Configuration</h3>
                                    <ul>
                                      <li>The API is configured to allow requests from any origin (<code>*</code>). You
                                        can modify the <code>corsOptions</code> variable in <code>index.js</code> to
                                        specify allowed origins explicitly.</li>
                                    </ul>
                                    <h3>Closing the Application</h3>
                                    <ul>
                                      <li>To stop the server, press <code>Ctrl + C</code> in the terminal where the
                                        server is running.</li>
                                    </ul>
                                    <h3>Conclusion</h3>
                                    <p>You have successfully set up and used the Express MySQL API. Feel free to modify
                                      the API endpoints and database operations based on your application's
                                      requirements.</p>
                                    <p>For more information on Express.js, MySQL, and CORS, refer to their respective
                                      documentation:</p>
                                    <ul>
                                      <li><a href="https://expressjs.com/" target="_new">Express.js Documentation</a>
                                      </li>
                                      <li><a href="https://github.com/mysqljs/mysql" target="_new">MySQL Node.js
                                          Documentation</a></li>
                                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
                                          target="_new">CORS Documentation</a></li>
                                    </ul>
                                    <p>Happy coding!</p>
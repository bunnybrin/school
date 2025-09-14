<template>
  <div class="container">
    <section id="section1" class="section section-1">
      <h2>1️⃣ Сусідні відрізки</h2>

      <div class="definition-box">
        <strong>Означення:</strong> Сусідніми відрізками називають відрізки, які мають тільки одну спільну точку, що є кінцем кожного з них.
      </div>

      <div class="visual-demo">
        <div class="segments-demo">
          <svg width="400" height="200" viewBox="0 0 400 200" class="interactive-svg">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7"
               refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50" />
              </marker>
            </defs>
            <!-- Segment AB -->
            <line x1="50" y1="100" x2="200" y2="100" stroke="#007bff" stroke-width="4" class="segment-line" />
            <circle cx="50" cy="100" r="6" fill="#dc3545" class="point" />
            <circle cx="200" cy="100" r="6" fill="#28a745" class="point shared-point" />
            <text x="40" y="90" font-size="16" font-weight="bold" fill="#2c3e50">A</text>
            <text x="210" y="90" font-size="16" font-weight="bold" fill="#2c3e50">B</text>

            <!-- Segment BC -->
            <line x1="200" y1="100" x2="350" y2="50" stroke="#fd7e14" stroke-width="4" class="segment-line" />
            <circle cx="350" cy="50" r="6" fill="#dc3545" class="point" />
            <text x="360" y="45" font-size="16" font-weight="bold" fill="#2c3e50">C</text>

            <!-- Labels -->
            <text x="120" y="90" font-size="14" fill="#007bff" font-weight="600">відрізок AB</text>
            <text x="250" y="70" font-size="14" fill="#fd7e14" font-weight="600">відрізок BC</text>
          </svg>
        </div>

        <div class="explanation-box">
          <p><strong>Приклад:</strong> Відрізки <span v-html="renderMath('AB')"></span> і <span v-html="renderMath('BC')"></span> є сусідніми, якщо вони мають спільну точку <span v-html="renderMath('B')"></span>.</p>
          <div class="highlight-note">
            <span class="icon">💡</span>
            <p>Точка <span v-html="renderMath('B')"></span> є спільною для обох відрізків і є кінцем кожного з них</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="section section-2">
      <h2>2️⃣ Чотирикутник як фігура</h2>

      <div class="definition-box">
        <strong>Означення:</strong> Чотирикутником називають фігуру, що складається з чотирьох точок <span v-html="renderMath('A, B, C, D')"></span> і чотирьох відрізків <span v-html="renderMath('AB, BC, CD, DA')"></span>.
      </div>

      <div class="quadrilateral-properties">
        <div class="visual-grid">
          <div class="quadrilateral-demo">
            <svg width="300" height="250" viewBox="0 0 300 250" class="interactive-svg">
              <!-- Quadrilateral ABCD -->
              <polygon points="50,50 200,80 220,180 80,200"
                      fill="rgba(111, 66, 193, 0.1)"
                      stroke="#6f42c1"
                      stroke-width="3"
                      class="quadrilateral" />

              <!-- Vertices -->
              <circle cx="50" cy="50" r="8" fill="#dc3545" class="vertex" />
              <circle cx="200" cy="80" r="8" fill="#dc3545" class="vertex" />
              <circle cx="220" cy="180" r="8" fill="#dc3545" class="vertex" />
              <circle cx="80" cy="200" r="8" fill="#dc3545" class="vertex" />

              <!-- Vertex labels -->
              <text x="35" y="45" font-size="18" font-weight="bold" fill="#2c3e50">A</text>
              <text x="205" y="75" font-size="18" font-weight="bold" fill="#2c3e50">B</text>
              <text x="225" y="175" font-size="18" font-weight="bold" fill="#2c3e50">C</text>
              <text x="65" y="215" font-size="18" font-weight="bold" fill="#2c3e50">D</text>

              <!-- Side labels -->
              <text x="120" y="60" font-size="12" fill="#007bff" font-weight="600">AB</text>
              <text x="215" y="130" font-size="12" fill="#007bff" font-weight="600">BC</text>
              <text x="150" y="200" font-size="12" fill="#007bff" font-weight="600">CD</text>
              <text x="55" y="130" font-size="12" fill="#007bff" font-weight="600">DA</text>
            </svg>
          </div>

          <div class="properties-list">
            <h3>Властивості чотирикутника:</h3>
            <div class="property-item">
              <span class="icon">✅</span>
              <p>ніякі два сусідні відрізки не лежать на одній прямій</p>
            </div>
            <div class="property-item">
              <span class="icon">✅</span>
              <p>ніякі два несусідні відрізки не мають спільних точок</p>
            </div>
            <div class="property-item">
              <span class="icon">✅</span>
              <p>ці відрізки обмежують частину площини</p>
            </div>
          </div>
        </div>

        <div class="elements-grid">
          <div class="element-card">
            <span class="icon">📍</span>
            <h4>Вершини</h4>
            <p><span v-html="renderMath('A, B, C, D')"></span></p>
          </div>
          <div class="element-card">
            <span class="icon">📏</span>
            <h4>Сторони</h4>
            <p><span v-html="renderMath('AB, BC, CD, DA')"></span></p>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="section section-3">
      <h2>3️⃣ Сусідні та протилежні сторони чотирикутника</h2>

      <div class="sides-comparison">
        <div class="comparison-grid">
          <div class="comparison-item">
            <h3>🔗 Сусідні сторони</h3>
            <div class="definition-box">
              <strong>Сусідні сторони</strong> — сторони, які є сусідніми відрізками.
            </div>

            <svg width="200" height="200" viewBox="0 0 200 200" class="interactive-svg">
              <polygon points="40,40 160,60 140,140 60,160"
                      fill="rgba(40, 167, 69, 0.1)"
                      stroke="#28a745"
                      stroke-width="2" />

              <!-- Highlight adjacent sides -->
              <line x1="40" y1="40" x2="160" y2="60" stroke="#dc3545" stroke-width="4" />
              <line x1="60" y1="160" x2="40" y2="40" stroke="#dc3545" stroke-width="4" />

              <circle cx="40" cy="40" r="6" fill="#ffc107" />
              <text x="25" y="35">M</text>
              <text x="165" y="55">N</text>
              <text x="145" y="155">P</text>
              <text x="45" y="175">Q</text>
            </svg>

            <p><strong>Приклад:</strong> у чотирикутнику $MNPQ$ сторони $MQ$ і $MN$ є сусідніми.</p>
          </div>

          <div class="comparison-item">
            <h3>↔️ Протилежні сторони</h3>
            <div class="definition-box">
              <strong>Протилежні сторони</strong> — сторони, які не є сусідніми.
            </div>

            <svg width="200" height="200" viewBox="0 0 200 200" class="interactive-svg">
              <polygon points="40,40 160,60 140,140 60,160"
                      fill="rgba(255, 193, 7, 0.1)"
                      stroke="#ffc107"
                      stroke-width="2" />

              <!-- Highlight opposite sides -->
              <line x1="40" y1="40" x2="160" y2="60" stroke="#007bff" stroke-width="4" />
              <line x1="140" y1="140" x2="60" y2="160" stroke="#007bff" stroke-width="4" />

              <circle cx="40" cy="40" r="6" fill="#dc3545" />
              <text x="25" y="35">M</text>
              <text x="165" y="55">N</text>
              <text x="145" y="155">P</text>
              <text x="45" y="175">Q</text>
            </svg>

            <p><strong>Приклад:</strong> у чотирикутнику $MNPQ$ сторони $NP$ і $MQ$ є протилежними.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section section-4">
      <h2>4️⃣ Сусідні та протилежні вершини чотирикутника</h2>

      <div class="vertices-comparison">
        <div class="comparison-grid">
          <div class="comparison-item">
            <h3>🔗 Сусідні вершини</h3>
            <div class="definition-box">
              <strong>Сусідні вершини</strong> — вершини, які є кінцями однієї сторони.
            </div>

            <svg width="200" height="200" viewBox="0 0 200 200" class="interactive-svg">
              <polygon points="40,40 160,60 140,140 60,160"
                      fill="rgba(32, 201, 151, 0.1)"
                      stroke="#20c997"
                      stroke-width="2" />

              <!-- Highlight adjacent vertices and connecting side -->
              <line x1="140" y1="140" x2="60" y2="160" stroke="#dc3545" stroke-width="4" />
              <circle cx="140" cy="140" r="8" fill="#dc3545" />
              <circle cx="60" cy="160" r="8" fill="#dc3545" />

              <circle cx="40" cy="40" r="6" fill="#6c757d" />
              <circle cx="160" cy="60" r="6" fill="#6c757d" />

              <text x="25" y="35">M</text>
              <text x="165" y="55">N</text>
              <text x="145" y="155">P</text>
              <text x="45" y="175">Q</text>
            </svg>

            <p><strong>Приклад:</strong> у чотирикутнику $MNPQ$ вершини $Q$ і $P$ є сусідніми.</p>
          </div>

          <div class="comparison-item">
            <h3>↔️ Протилежні вершини</h3>
            <div class="definition-box">
              <strong>Протилежні вершини</strong> — несусідні вершини.
            </div>

            <svg width="200" height="200" viewBox="0 0 200 200" class="interactive-svg">
              <polygon points="40,40 160,60 140,140 60,160"
                      fill="rgba(253, 126, 20, 0.1)"
                      stroke="#fd7e14"
                      stroke-width="2" />

              <!-- Highlight opposite vertices -->
              <circle cx="40" cy="40" r="8" fill="#007bff" />
              <circle cx="140" cy="140" r="8" fill="#007bff" />
              <!-- Dashed line between opposite vertices -->
              <line x1="40" y1="40" x2="140" y2="140" stroke="#007bff" stroke-width="2" stroke-dasharray="5,5" />

              <circle cx="160" cy="60" r="6" fill="#6c757d" />
              <circle cx="60" cy="160" r="6" fill="#6c757d" />

              <text x="25" y="35">M</text>
              <text x="165" y="55">N</text>
              <text x="145" y="155">P</text>
              <text x="45" y="175">Q</text>
            </svg>

            <p><strong>Приклад:</strong> у чотирикутнику $MNPQ$ вершини $M$ і $P$ є протилежними.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="section section-5">
      <h2>5️⃣ Позначення чотирикутника</h2>

      <div class="notation-rules">
        <div class="definition-box">
          Чотирикутник називають і позначають за його вершинами.<br>
          У позначенні літери, що стоять поруч, відповідають сусіднім вершинам.
        </div>

        <div class="notation-examples">
          <h3>📝 Приклади позначень:</h3>
          <div class="examples-grid">
            <div class="example-card valid">
              <span class="icon">✅</span>
              <h4>Правильні позначення</h4>
              <div class="notation-list">
                <span class="notation">$ABCD$</span>
                <span class="notation">$PQMN$</span>
                <span class="notation">$MQPN$</span>
                <span class="notation">$NPQM$</span>
              </div>
            </div>

            <div class="example-card invalid">
              <span class="icon">❌</span>
              <h4>Неправильні позначення</h4>
              <div class="notation-list">
                <span class="notation crossed">$ACBD$ </span>
                <span class="notation crossed">$PMQN$ </span>
              </div>
              <p class="note">Несусідні вершини стоять поруч</p>
            </div>
          </div>
        </div>

        <div class="interactive-notation">
          <svg width="300" height="250" viewBox="0 0 300 250" class="interactive-svg">
            <polygon points="50,50 200,70 180,180 70,200"
                    fill="rgba(111, 66, 193, 0.1)"
                    stroke="#6f42c1"
                    stroke-width="3" />

            <circle cx="50" cy="50" r="8" fill="#dc3545" class="vertex clickable" />
            <circle cx="200" cy="70" r="8" fill="#28a745" class="vertex clickable" />
            <circle cx="180" cy="180" r="8" fill="#007bff" class="vertex clickable" />
            <circle cx="70" cy="200" r="8" fill="#ffc107" class="vertex clickable" />

            <text x="35" y="45" font-size="18" font-weight="bold" fill="#2c3e50">A</text>
            <text x="205" y="65" font-size="18" font-weight="bold" fill="#2c3e50">B</text>
            <text x="185" y="175" font-size="18" font-weight="bold" fill="#2c3e50">C</text>
            <text x="55" y="215" font-size="18" font-weight="bold" fill="#2c3e50">D</text>

            <!-- Arrow showing direction -->
            <path d="M 60 60 Q 100 40 190 80" stroke="#6c757d" stroke-width="2" fill="none" marker-end="url(#arrowhead)" />
            <text x="120" y="50" font-size="12" fill="#6c757d">напрямок обходу</text>
          </svg>
        </div>
      </div>
    </section>

    <section id="section6" class="section section-6">
      <h2>6️⃣ Периметр чотирикутника</h2>

      <div class="perimeter-concept">
        <div class="definition-box">
          <strong>Означення:</strong> Периметром чотирикутника називають суму довжин усіх його сторін.
        </div>

        <div class="formula-section">
          <div class="formula-box">
            <h3>📐 Формула периметра</h3>
            <div class="formula-display">
              <span v-html="renderMath('P = AB + BC + CD + DA')"></span>
            </div>
            <p>або</p>
            <div class="formula-display">
              <span v-html="renderMath('P = a + b + c + d')"></span>
            </div>
          </div>

          <div class="visual-example">
            <svg width="250" height="200" viewBox="0 0 250 200" class="interactive-svg">
              <polygon points="50,50 180,60 170,150 60,160"
                      fill="rgba(0, 123, 255, 0.1)"
                      stroke="#007bff"
                      stroke-width="3" />

              <circle cx="50" cy="50" r="6" fill="#dc3545" />
              <circle cx="180" cy="60" r="6" fill="#dc3545" />
              <circle cx="170" cy="150" r="6" fill="#dc3545" />
              <circle cx="60" cy="160" r="6" fill="#dc3545" />

              <text x="35" y="45">A</text>
              <text x="185" y="55">B</text>
              <text x="175" y="165">C</text>
              <text x="45" y="175">D</text>

              <!-- Side measurements -->
              <text x="110" y="45" font-size="14" fill="#007bff" font-weight="600">a</text>
              <text x="185" y="105" font-size="14" fill="#007bff" font-weight="600">b</text>
              <text x="115" y="165" font-size="14" fill="#007bff" font-weight="600">c</text>
              <text x="45" y="105" font-size="14" fill="#007bff" font-weight="600">d</text>
            </svg>
          </div>
        </div>

        <div class="example-box">
          <h4>📊 Числовий приклад:</h4>
          <p>Якщо сторони чотирикутника дорівнюють: <span v-html="renderMath('a = 5')"></span> см, <span v-html="renderMath('b = 7')"></span> см, <span v-html="renderMath('c = 6')"></span> см, <span v-html="renderMath('d = 4')"></span> см</p>
          <p>То периметр: <span v-html="renderMath('P = 5 + 7 + 6 + 4 = 22')"></span> см</p>
        </div>
      </div>
    </section>

    <section id="section7" class="section section-7">
      <h2>7️⃣ Діагональ чотирикутника</h2>

      <div class="diagonal-concept">
        <div class="definition-box">
          <strong>Означення:</strong> Діагоналлю чотирикутника називають відрізок, який сполучає протилежні вершини чотирикутника.
        </div>

        <div class="diagonal-visualization">
          <div class="visual-grid">
            <div class="diagonal-demo">
              <svg width="280" height="250" viewBox="0 0 280 250" class="interactive-svg">
                <polygon points="50,50 200,70 180,180 70,200"
                        fill="rgba(220, 53, 69, 0.05)"
                        stroke="#dc3545"
                        stroke-width="3" />

                <!-- Diagonals -->
                <line x1="50" y1="50" x2="180" y2="180" stroke="#007bff" stroke-width="4" class="diagonal" />
                <line x1="200" y1="70" x2="70" y2="200" stroke="#28a745" stroke-width="4" class="diagonal" />

                <circle cx="50" cy="50" r="8" fill="#dc3545" />
                <circle cx="200" cy="70" r="8" fill="#dc3545" />
                <circle cx="180" cy="180" r="8" fill="#dc3545" />
                <circle cx="70" cy="200" r="8" fill="#dc3545" />

                <text x="35" y="45" font-size="18" font-weight="bold">A</text>
                <text x="205" y="65" font-size="18" font-weight="bold">B</text>
                <text x="185" y="175" font-size="18" font-weight="bold">C</text>
                <text x="55" y="215" font-size="18" font-weight="bold">D</text>

                <!-- Diagonal labels -->
                <text x="105" y="110" font-size="14" fill="#007bff" font-weight="600">AC</text>
                <text x="130" y="140" font-size="14" fill="#28a745" font-weight="600">BD</text>
              </svg>
            </div>

            <div class="diagonal-info">
              <h3>🔍 Властивості діагоналей</h3>
              <div class="property-list">
                <div class="property-item">
                  <span class="icon">📏</span>
                  <p>У чотирикутника є <strong>дві діагоналі</strong></p>
                </div>
                <div class="property-item">
                  <span class="icon">🎯</span>
                  <p>Діагоналі з'єднують <strong>протилежні вершини</strong></p>
                </div>
                <div class="property-item">
                  <span class="icon">✂️</span>
                  <p>Діагоналі <strong>перетинаються</strong> всередині чотирикутника</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="example-box">
          <strong>💡 Приклад:</strong> У чотирикутнику $ABCD$ відрізки $AC$ і $BD$ є діагоналями.
        </div>
      </div>
    </section>

    <section id="section8" class="section section-8">
      <h2>8️⃣ Опуклий чотирикутник</h2>

      <div class="convexity-concept">
        <div class="definition-box">
          <strong>Опуклий чотирикутник</strong> — чотирикутник, у якому всі його кути менші від розгорнутого (менші за $180°$).
        </div>

        <div class="convex-comparison">
          <div class="comparison-grid">
            <div class="comparison-item">
              <h3>✅ Опуклий чотирикутник</h3>
              <svg width="200" height="200" viewBox="0 0 200 200" class="interactive-svg">
                <polygon points="40,40 160,50 150,150 50,160"
                        fill="rgba(40, 167, 69, 0.2)"
                        stroke="#28a745"
                        stroke-width="3" />

                <circle cx="40" cy="40" r="6" fill="#dc3545" />
                <circle cx="160" cy="50" r="6" fill="#dc3545" />
                <circle cx="150" cy="150" r="6" fill="#dc3545" />
                <circle cx="50" cy="160" r="6" fill="#dc3545" />

                <!-- Angle arcs -->
                <path d="M 50 40 A 15 15 0 0 1 40 50" stroke="#007bff" stroke-width="2" fill="none" />
                <text x="45" y="55" font-size="12" fill="#007bff">< 180°</text>
              </svg>
              <p>Усі кути менші за <span v-html="renderMath('180°')"></span></p>
            </div>

            <div class="comparison-item">
              <h3>❌ Неопуклий чотирикутник</h3>
              <svg width="200" height="200" viewBox="0 0 200 200" class="interactive-svg">
                <polygon points="40,40 120,80 160,50 150,150 50,160"
                        fill="rgba(220, 53, 69, 0.2)"
                        stroke="#dc3545"
                        stroke-width="3" />

                <circle cx="40" cy="40" r="6" fill="#dc3545" />
                <circle cx="120" cy="80" r="6" fill="#ffc107" />
                <circle cx="160" cy="50" r="6" fill="#dc3545" />
                <circle cx="150" cy="150" r="6" fill="#dc3545" />
                <circle cx="50" cy="160" r="6" fill="#dc3545" />

                <!-- Reflex angle -->
                <path d="M 110 80 A 25 25 0 1 1 130 80" stroke="#dc3545" stroke-width="2" fill="none" />
                <text x="105" y="105" font-size="12" fill="#dc3545">> 180°</text>
              </svg>
              <p>Один або більше кутів більші за <span v-html="renderMath('180°')"></span></p>
            </div>
          </div>
        </div>

        <div class="convex-note">
          <div class="definition-box">
            Чотирикутники, у яких не всі кути менші від розгорнутого, називають <strong>неопуклими</strong>.
          </div>
        </div>
      </div>
    </section>

    <section id="section9" class="section section-9">
      <h2>9️⃣ Теорема про суму кутів чотирикутника</h2>

      <div class="theorem-section">
        <div class="theorem-box">
          <h3>📐 Теорема 1.1</h3>
          <p><strong>Сума кутів чотирикутника дорівнює <span v-html="renderMath('360°')"></span>.</strong></p>
        </div>

        <div class="proof-section">
          <h3>🔍 Доведення:</h3>

          <div class="proof-visualization">
            <svg width="350" height="300" viewBox="0 0 350 300" class="interactive-svg">
              <!-- Quadrilateral -->
              <polygon points="80,80 250,100 220,220 100,240"
                      fill="rgba(111, 66, 193, 0.1)"
                      stroke="#6f42c1"
                      stroke-width="3" />

              <!-- Diagonal dividing into triangles -->
              <line x1="80" y1="80" x2="220" y2="220" stroke="#dc3545" stroke-width="3" stroke-dasharray="5,5" />

              <!-- Vertices -->
              <circle cx="80" cy="80" r="8" fill="#dc3545" />
              <circle cx="250" cy="100" r="8" fill="#dc3545" />
              <circle cx="220" cy="220" r="8" fill="#dc3545" />
              <circle cx="100" cy="240" r="8" fill="#dc3545" />

              <text x="65" y="75" font-size="18" font-weight="bold">A</text>
              <text x="255" y="95" font-size="18" font-weight="bold">B</text>
              <text x="225" y="235" font-size="18" font-weight="bold">C</text>
              <text x="85" y="255" font-size="18" font-weight="bold">D</text>

              <!-- Triangle labels -->
              <text x="140" y="130" font-size="14" fill="#007bff" font-weight="600">△ABC</text>
              <text x="140" y="190" font-size="14" fill="#28a745" font-weight="600">△ACD</text>

              <!-- Angle markings -->
              <path d="M 90 80 A 20 20 0 0 1 80 100" stroke="#ffc107" stroke-width="2" fill="none" />
              <path d="M 240 100 A 20 20 0 0 1 250 120" stroke="#ffc107" stroke-width="2" fill="none" />
              <path d="M 210 220 A 20 20 0 0 1 220 200" stroke="#ffc107" stroke-width="2" fill="none" />
              <path d="M 100 230 A 20 20 0 0 1 110 240" stroke="#ffc107" stroke-width="2" fill="none" />
            </svg>
          </div>

          <div class="proof-steps">
            <div class="step-item">
              <span class="step-number">1</span>
              <p>У будь-якому чотирикутнику можна провести діагональ</p>
            </div>
            <div class="step-item">
              <span class="step-number">2</span>
              <p>Діагональ розбиває чотирикутник на два трикутники</p>
            </div>
            <div class="step-item">
              <span class="step-number">3</span>
              <p>Сума кутів чотирикутника = сума кутів двох трикутників</p>
            </div>
            <div class="step-item">
              <span class="step-number">4</span>
              <p>Сума кутів кожного трикутника = <span v-html="renderMath('180°')"></span></p>
            </div>
          </div>

          <div class="formula-box">
            <h4>📊 Математичний запис:</h4>
            <div class="formula-display">
              <span v-html="renderMath('\\angle A + \\angle B + \\angle C + \\angle D = 180° + 180° = 360°')"></span>
            </div>
          </div>
        </div>

        <div class="corollary-section">
          <div class="corollary-box">
            <h4>📌 Наслідок:</h4>
            <p>У чотирикутнику тільки один із кутів може бути більшим за розгорнутий.</p>
          </div>
        </div>

        <div class="example-box">
          <h4>🧮 Практичний приклад:</h4>
          <p>Якщо три кути чотирикутника дорівнюють <span v-html="renderMath('85°')"></span>, <span v-html="renderMath('95°')"></span> і <span v-html="renderMath('110°')"></span>, то четвертий кут:</p>
          <div class="calculation">
            <span v-html="renderMath('\\angle D = 360° - (85° + 95° + 110°) = 360° - 290° = 70°')"></span>
          </div>
        </div>
      </div>
    </section>

    <div class="conclusion">
      <h3>🎓 Висновок</h3>
      <p>Розуміння основних понять і властивостей чотирикутників є фундаментом для вивчення геометрії. Знання про сусідні та протилежні елементи, діагоналі та суму кутів допоможе в розв'язанні геометричних задач.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const renderMath = (expression) => {
  try {
    return katex.renderToString(expression, {
      throwOnError: false,
      displayMode: false
    })
  } catch (error) {
    console.error('KaTeX rendering error:', error)
    return expression
  }
}

onMounted(() => {
  console.log('QuadrilateralsTheoryLesson component mounted')
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 6px;
  border-left: 4px solid #dee2e6;
  background: #f8f9fa;
}

.section-1 { border-left-color: #6f42c1; }
.section-2 { border-left-color: #20c997; }
.section-3 { border-left-color: #fd7e14; }
.section-4 { border-left-color: #dc3545; }
.section-5 { border-left-color: #007bff; }
.section-6 { border-left-color: #28a745; }
.section-7 { border-left-color: #17a2b8; }
.section-8 { border-left-color: #ffc107; }
.section-9 { border-left-color: #6f42c1; }

.section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255,255,255,0.5);
}

.section h3 {
  color: #34495e;
  font-size: 1.3em;
  margin: 20px 0 10px 0;
}

.definition-box {
  background: white;
  padding: 20px;
  border-radius: 6px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
  border-left: 4px solid #6c757d;
  line-height: 1.6;
}

.definition-box strong {
  color: #2c3e50;
}

.visual-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
  align-items: center;
}

.segments-demo {
  text-align: center;
}

.interactive-svg {
  max-width: 100%;
  height: auto;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  padding: 10px;
}

.segment-line {
  transition: stroke-width 0.3s ease;
}

.segment-line:hover {
  stroke-width: 6px;
}

.point {
  transition: r 0.3s ease;
}

.point:hover {
  r: 8;
}

.shared-point {
  filter: drop-shadow(0 0 8px #28a745);
}

.explanation-box {
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.highlight-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  padding: 15px;
  background: #e2f3ff;
  border-radius: 6px;
  border-left: 4px solid #007bff;
}

.highlight-note .icon {
  font-size: 1.5em;
}

.visual-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  margin: 20px 0;
  align-items: start;
}

.quadrilateral {
  transition: all 0.3s ease;
  cursor: pointer;
}

.quadrilateral:hover {
  fill: rgba(111, 66, 193, 0.2);
  stroke-width: 4;
}

.vertex {
  transition: all 0.3s ease;
  cursor: pointer;
}

.vertex:hover {
  r: 10;
  filter: drop-shadow(0 0 8px rgba(220, 53, 69, 0.6));
}

.properties-list h3 {
  color: #495057;
  margin-bottom: 15px;
}

.property-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 8px;
  background: rgba(255,255,255,0.7);
  border-radius: 4px;
}

.property-item .icon {
  font-size: 1.2em;
  color: #28a745;
}

.elements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.element-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.element-card:hover {
  border-color: #6f42c1;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(111, 66, 193, 0.1);
}

.element-card .icon {
  font-size: 2.5em;
  margin-bottom: 10px;
  display: block;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}

.comparison-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  text-align: center;
}

.comparison-item h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.notation-examples {
  margin: 20px 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.example-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid;
  text-align: center;
}

.example-card.valid {
  border-color: #28a745;
  background: rgba(40, 167, 69, 0.02);
}

.example-card.invalid {
  border-color: #dc3545;
  background: rgba(220, 53, 69, 0.02);
}

.example-card .icon {
  font-size: 2em;
  margin-bottom: 10px;
  display: block;
}

.notation-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 0;
}

.notation {
  background: rgba(255,255,255,0.8);
  padding: 8px 12px;
  border-radius: 4px;
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  font-weight: bold;
}

.notation.crossed {
  text-decoration: line-through;
  color: #dc3545;
}

.note {
  font-size: 0.9em;
  color: #6c757d;
  margin-top: 10px;
}

.clickable {
  cursor: pointer;
}

.clickable:hover {
  filter: drop-shadow(0 0 8px rgba(0,0,0,0.3));
}

.formula-section {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 30px;
  margin: 20px 0;
  align-items: center;
}

.formula-box {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #007bff;
  text-align: center;
}

.formula-box h3 {
  color: #007bff;
  margin-bottom: 15px;
}

.formula-display {
  font-size: 1.4em;
  color: #2c3e50;
  margin: 15px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  font-family: 'Times New Roman', serif;
  font-weight: bold;
}

.visual-example {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.example-box {
  background: #fff3cd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #ffeaa7;
  border-left: 4px solid #f39c12;
}

.example-box h4 {
  color: #856404;
  margin-bottom: 10px;
}

.calculation {
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin: 10px 0;
  padding: 10px;
  background: rgba(255,255,255,0.7);
  border-radius: 4px;
}

.diagonal {
  transition: stroke-width 0.3s ease;
  cursor: pointer;
}

.diagonal:hover {
  stroke-width: 6px;
  filter: drop-shadow(0 0 4px rgba(0,0,0,0.3));
}

.theorem-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  margin: 20px 0;
}

.theorem-box h3 {
  color: white;
  margin-bottom: 15px;
}

.proof-visualization {
  text-align: center;
  margin: 20px 0;
}

.proof-steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 20px 0;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.step-number {
  background: #007bff;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.corollary-box {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
  margin: 20px 0;
}

.corollary-box h4 {
  color: #1976d2;
  margin-bottom: 10px;
}

.conclusion {
  text-align: center;
  margin: 40px 0;
  padding: 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.conclusion h3 {
  color: white;
  margin-bottom: 15px;
}

.conclusion p {
  font-size: 1.1em;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  .visual-demo {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .visual-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }

  .formula-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .proof-steps {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 20px 15px;
  }
}

@media (max-width: 480px) {
  .section h2 {
    font-size: 1.5em;
  }

  .interactive-svg {
    width: 100%;
    height: auto;
  }

  .formula-display {
    font-size: 1.2em;
  }

  .elements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
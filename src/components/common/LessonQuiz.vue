<template>
  <div class="lesson-quiz">
    <h3 class="quiz-title">
      <span class="icon">🧠</span>
      {{ title }}
    </h3>
    <p v-if="description" class="quiz-description">{{ description }}</p>

    <div class="quiz-questions">
      <div class="quiz-question" v-for="(question, index) in questions" :key="index">
        <div class="question-header">
          <span class="question-number">{{ index + 1 }}</span>
          <h4 class="question-text">{{ question.question }}</h4>
        </div>

        <div class="answer-options">
          <label
            v-for="(option, optionIndex) in question.options"
            :key="optionIndex"
            class="answer-option"
            :class="{
              selected: selectedAnswers[index] === optionIndex,
              correct: showSolution(index) && optionIndex === question.correct,
              incorrect:
                showSolution(index) &&
                selectedAnswers[index] === optionIndex &&
                optionIndex !== question.correct
            }"
          >
            <input
              type="radio"
              :name="`question-${quizId}-${index}`"
              :value="optionIndex"
              @change="selectAnswer(index, optionIndex)"
            >
            <span class="option-text">{{ option }}</span>
          </label>
        </div>

        <div v-if="showSolution(index)" class="question-feedback">
          <div
            class="feedback-status"
            :class="{ success: isCorrect(index), error: !isCorrect(index) }"
          >
            <span class="status-icon">{{ isCorrect(index) ? '✅' : '❌' }}</span>
            <span>{{ isCorrect(index) ? successMessage : errorMessage }}</span>
          </div>

          <p class="hint-text">{{ question.hint }}</p>

          <button
            v-if="question.sectionId"
            type="button"
            class="hint-button"
            @click="scrollToSection(question.sectionId)"
          >
            🔍 Показати в теорії
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Інтерактивний тест'
  },
  description: {
    type: String,
    default: ''
  },
  questions: {
    type: Array,
    required: true,
    default: () => []
  },
  successMessage: {
    type: String,
    default: 'Молодець! Це правильна відповідь.'
  },
  errorMessage: {
    type: String,
    default: 'Це ще не те. Переглянь підказку та спробуй знову.'
  }
})

const selectedAnswers = ref({})
const quizId = Math.random().toString(36).slice(2, 9)

const selectAnswer = (index, optionIndex) => {
  selectedAnswers.value = {
    ...selectedAnswers.value,
    [index]: optionIndex
  }
}

const showSolution = index => selectedAnswers.value[index] !== undefined

const isCorrect = index => selectedAnswers.value[index] === props.questions[index].correct

const scrollToSection = sectionId => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    element.classList.add('highlight-section')
    setTimeout(() => {
      element.classList.remove('highlight-section')
    }, 2000)
  }
}
</script>

<style scoped>
.lesson-quiz {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e9f2;
}

.quiz-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #2c3e50;
}

.quiz-description {
  margin-bottom: 20px;
  color: #4a5568;
  line-height: 1.6;
}

.quiz-questions {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.quiz-question {
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(0, 210, 255, 0.05));
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(0, 123, 255, 0.15);
}

.question-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.question-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #007bff;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1rem;
}

.question-text {
  font-size: 1.1rem;
  color: #2d3748;
  margin: 0;
}

.answer-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.answer-option {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.answer-option.selected {
  border-color: #007bff;
  background: rgba(0, 123, 255, 0.08);
}

.answer-option.correct {
  border-color: #38a169;
  background: rgba(56, 161, 105, 0.1);
}

.answer-option.incorrect {
  border-color: #e53e3e;
  background: rgba(229, 62, 62, 0.1);
}

.answer-option input {
  accent-color: #007bff;
}

.option-text {
  font-size: 1rem;
  color: #2d3748;
}

.question-feedback {
  border-top: 1px dashed rgba(0, 123, 255, 0.3);
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feedback-status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.feedback-status.success {
  color: #2f855a;
}

.feedback-status.error {
  color: #c53030;
}

.status-icon {
  font-size: 1.2rem;
}

.hint-text {
  margin: 0;
  color: #4a5568;
  line-height: 1.6;
}

.hint-button {
  align-self: flex-start;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.hint-button:hover {
  background: #0056b3;
}

.icon {
  font-size: 1.8rem;
}

:global(.highlight-section) {
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  transition: box-shadow 0.3s ease;
}

@media (max-width: 768px) {
  .lesson-quiz {
    padding: 20px;
  }

  .quiz-question {
    padding: 16px;
  }
}
</style>
